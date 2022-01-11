<?php
include_once "../../../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'vip_like_fast') {
        $vip_like_facebook      = htmlspecialchars(addslashes($_POST['vip_like_facebook']));
        $vip_like_service       = htmlspecialchars(addslashes($_POST['vip_like_service']));
        $vip_like_content       = htmlspecialchars(addslashes($_POST['vip_like_content']));
        $vip_like_speed         = htmlspecialchars(addslashes($_POST['vip_like_speed']));
        $vip_like_reaction      = htmlspecialchars(addslashes($_POST['vip_like_reaction']));
        $vip_like_amount        = htmlspecialchars(addslashes($_POST['vip_like_amount']));
        $vip_like_amount_post   = htmlspecialchars(addslashes($_POST['vip_like_amount_post']));
        $vip_like_expires       = htmlspecialchars(addslashes($_POST['vip_like_expires']));
        $vip_like_time          = time();
        $history_buy_ip         = $_SERVER['REMOTE_ADDR'];
        $check_service          = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_service WHERE service_slug = '$vip_like_service'"));
        $total_payment          = $check_service['service_point'] * $vip_like_amount * $vip_like_amount_post * $vip_like_expires;
        $check_info_facebook    = json_decode(file_get_contents('https://graph.facebook.com/' . $vip_like_facebook . '?fields=name,id&access_token=' . $settings_token), true);
        $vip_like_facebook_name = $check_info_facebook['name'];
        if ($vip_like_expires == 1) {
            $vip_like_expires = 30;
        } else if ($vip_like_expires == 2) {
            $vip_like_expires = 60;
        } else if ($vip_like_expires == 3) {
            $vip_like_expires = 90;
        } else if ($vip_like_expires == 4) {
            $vip_like_expires = 120;
        } else if ($vip_like_expires == 5) {
            $vip_like_expires = 150;
        } else if ($vip_like_expires == 6) {
            $vip_like_expires = 180;
        }
        $vip_like_expires            = $vip_like_time + 1 * $vip_like_expires * 86400 - 28800;
        $vip_like_facebook_available = mysqli_num_rows(mysqli_query($conn, "SELECT vip_like_id FROM table_vip_like WHERE vip_like_facebook = '$vip_like_facebook'"));
        if ($total_payment > $user_point) {
            $return['error'] = 1;
            $return['msg']   = 'Số dư tài khoản của bạn không đủ.';
            die(json_encode($return));
        } else if ($vip_like_amount < $check_service['service_min_amount']) {
            $return['error'] = 1;
            $return['msg']   = 'Vui lòng mua tối thiểu ' . $check_service['service_min_amount'] . ' like.';
            die(json_encode($return));
        } else if (!$check_info_facebook['id']) {
            $return['error'] = 1;
            $return['msg']   = 'ID Facebook này không hợp lệ hoặc tài khoản đã bị khóa.';
            die(json_encode($return));
        } else if ($vip_like_facebook_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id Facebook này đã tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            mysqli_query($conn, "UPDATE table_user SET user_point = user_point - '$total_payment' WHERE user_username = '$user_username'");
            mysqli_query($conn, "INSERT INTO table_history_buy(history_buy_username, history_buy_content, history_buy_point, history_buy_balance, history_buy_ip, history_buy_time) 
            VALUES ('$user_username', 'Mua vip like nhanh người dùng.', '$total_payment', '$user_point', '$history_buy_ip', '$vip_like_time')");
            if (mysqli_query($conn, "INSERT INTO table_vip_like(vip_like_username, vip_like_facebook_name, vip_like_facebook, vip_like_service, vip_like_content, vip_like_speed, vip_like_reaction, vip_like_amount, vip_like_amount_post, vip_like_expires, vip_like_status, vip_like_time) 
            VALUES ('$user_username', '$vip_like_facebook_name', '$vip_like_facebook', '$vip_like_service', '$vip_like_content', '$vip_like_speed', '$vip_like_reaction', '$vip_like_amount', '$vip_like_amount_post', '$vip_like_expires', 'progress', '$vip_like_time')")) {
                $return['msg'] = 'Thêm ID Vip Like thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Có gì đó không ổn.';
                die(json_encode($return));
            }
        }
        
    }
    
}
?>