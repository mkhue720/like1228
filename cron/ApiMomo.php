<?php
require_once "../_config.php";

$d    = date('d', strtotime("0 days"));
$m    = date('m', strtotime("0 days"));
$y    = date('Y', strtotime("0 days"));
$m    = date('F', mktime(0, 0, 0, $m, 10));
$date = $d . ' ' . $m . ' ' . $y;
if (!function_exists('imap_open')) {
    echo "IMAP is not configured.";
    die();
} else {
    $connection = imap_open('{imap.gmail.com:993/imap/ssl/novalidate-cert}INBOX', $settings_username_mail, $settings_password_mail) or die('Cannot connect to Gmail: ' . imap_last_error());
    $emailData = imap_search($connection, 'FROM "no-reply@momo.vn" SINCE "' . $date . '"');
    if (!empty($emailData)) {
        foreach ($emailData as $emailIdent) {
            $overview = imap_fetch_overview($connection, $emailIdent, 0);
            if (preg_match("/Giao dịch thành công/", imap_utf8($overview[0]->subject)))
                continue;
            if (!preg_match("/Bạn vừa nhận được tiền từ/", imap_utf8($overview[0]->subject)))
                continue;
            $message = ((imap_fetchbody($connection, $emailIdent, 1)));
            $message = preg_replace("/\s+/", " ", $message);
            preg_match('/(?<=li= ne-height: 1.2em; font-weight: 500;"> )(.*?)(?= <\/td>)/', $message, $matches);
            $money = ($matches[0]);
            preg_match('/(?<=height: 1.55em;" width=3D"50%"> <div style=3D"color:#3C4043;margin:0px;font-size:12px;li= ne-height:22px; font-weight: normal; font-size: 15px; padding-right: 10px;= "> M=C3=A3 giao d=E1=BB=8Bch<\/div> <\/td> <td class=3D"" style=3D"padding-top: 5px; padding-bottom: 5px; font-si= ze: 14px; font-family: Helvetica Neue, Arial, sans-serif; color: #3C4043; t= ext-align: left; line-height: 1.55em;" width=3D"50%"> <div style=3D"color:#3C4043;margin:0px;font-size:12px;li= ne-height:22px; font-weight: normal; font-size: 15px;"> )(.*?)(?=<\/div>)/', $message, $matches);
            $code = ($matches[0]);
            
            preg_match('/(?<=ADi<\/div> <\/td> <td class=3D"" style=3D"padding-top: 5px; padding-bottom: 5px; font-si= ze: 14px; font-family: Helvetica Neue, Arial, sans-serif; color: #3C4043; t= ext-align: left; line-height: 1.55em;" width=3D"50%"> <div style=3D"color:#3C4043;margin:0px;font-size:12px;li= ne-height:22px; font-weight: normal; font-size: 15px;"> )(.*?)(?=<\/div>)/', $message, $matches);
            $name = str_replace("=", '%', $matches[0]);
            $name = str_replace("%\s", '', $name);
            $name = urldecode($name);
            preg_match('/(?<=tho=E1=BA=A1i ng=C6=B0= =E1=BB=9Di g=E1=BB=ADi<\/div> <\/td> <td class=3D"" style=3D"padding-top: 5px; padding-bottom: 5px; font-si= ze: 14px; font-family: Helvetica Neue, Arial, sans-serif; color: #3C4043; t= ext-align: left; line-height: 1.55em;" width=3D"50%"> <div style=3D"color:#3C4043;margin:0px;font-size:12px;li= ne-height:22px; font-weight: normal; font-size: 15px;"> )(.*?)(?=<\/div>)/', $message, $matches);
            $phone = str_replace("=", '%', $matches[1]);
            preg_match('/(?<=gian<\/div> <\/td> <td class=3D"" style=3D"padding-top: 5px; padding-bottom: 5px; font-si= ze: 14px; font-family: Helvetica Neue, Arial, sans-serif; color: #3C4043; t= ext-align: left; line-height: 1.55em;" width=3D"50%"> <div style=3D"color:#3C4043;margin:0px;font-size:12px;li= ne-height:22px; font-weight: normal; font-size: 15px;"> )(.*?)(?=<\/div>)/', $message, $matches);
            $time = str_replace("=", '%', $matches[1]);
            preg_match('/(?<=L=E1=BB=9Di nh=E1=BA=AFn<\/div> <\/td> <td class=3D"" style=3D"padding-top: 5px; padding-bottom: 5px; font-si= ze: 14px; font-family: Helvetica Neue, Arial, sans-serif; color: #3C4043; t= ext-align: left; line-height: 1.55em;" width=3D"50%"> <div style=3D"color:#3C4043;margin:0px;font-size:12px;li= ne-height:22px; font-weight: normal; font-size: 15px;"> )(.*?)(?=<\/div>)/', $message, $matches);
            $content = str_replace('<div style="color:#3C4043;margin:0px;font-size:12px;li% ne-height:22px; font-weight: normal; font-size: 15px;"> ', '', urldecode(str_replace("=", '%', $matches[1])));
            $date    = date("d F, Y", strtotime($overview[0]->date));
            
            $user_username = parse_order_id($content);
            
            //Xử lý giao dịch
            if ($id) {
                $check_code = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_momo WHERE momo_tran_id = '$code'"));
                $check_user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_username = '$user_username'"));
                $momo_time  = time();
                if ($check_user) {
                    if ($check_code == 0) {
                        $money = str_replace('.', '', $money);
                        mysqli_query($conn, "UPDATE table_user SET user_point = user_point + '$money'  WHERE user_username = '$user_username'");
                        
                        if (mysqli_query($conn, "INSERT INTO table_momo(momo_username, momo_request_id, momo_tran_id, momo_partner_id, momo_partner_name, momo_amount, momo_content, momo_status, momo_time) 
                        VALUES ('$user_username', '0', '$code', '$phone', '$name', '$money', '$content', 'true', '$momo_time')")) {
                            echo 'thành công rùi';
                        }
                        
                    }
                }
            }
        }
        
    }
    imap_close($connection);
}
?>