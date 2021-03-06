<?php
include_once "../../../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'buff_follows') {
        $buff_like_facebook           = htmlspecialchars(addslashes($_POST['buff_like_facebook']));
        $buff_like_service            = htmlspecialchars(addslashes($_POST['buff_like_service']));
        $buff_like_content            = htmlspecialchars(addslashes($_POST['buff_like_content']));
        $buff_like_amount             = htmlspecialchars(addslashes($_POST['buff_like_amount']));
        $buff_like_type               = htmlspecialchars(addslashes($_POST['buff_like_type']));
        $buff_like_gender             = htmlspecialchars(addslashes($_POST['buff_like_gender']));
        $buff_like_time               = time();
        $history_buy_ip              = $_SERVER['REMOTE_ADDR'];
        $check_service                = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_service WHERE service_slug = '$buff_like_service'"));
        $check_info_facebook          = json_decode(file_get_contents('https://graph.facebook.com/' . $buff_like_facebook . '?fields=name,id&access_token=' . $settings_token), true);
        $check_follows_facebook       = json_decode(file_get_contents('https://graph.facebook.com/' . $buff_like_facebook . '/subscribers?limit=5&method=GET&access_token=' . $settings_token), true);
        $buff_like_facebook_name      = $check_info_facebook['name'];
        $buff_like_origin             = $check_follows_facebook['summary']['total_count'];
        $buff_like_present            = $check_follows_facebook['summary']['total_count'];
        $buff_like_facebook_available = mysqli_num_rows(mysqli_query($conn, "SELECT buff_like_id FROM table_buff_like WHERE buff_like_facebook = '$buff_like_facebook'"));
        if ($buff_like_type == 0) {
            $service_rate = $check_service['service_point'];
        } else {
            $service_rate = $check_service['service_warranty'];
        }
        if ($buff_like_gender != '' && $buff_like_gender != 'all') {
            $service_rate = $service_rate += $service_rate * $check_service['service_gender'] / 100;
        } 
        $total_payment = $service_rate * $buff_like_amount;
        if ($total_payment > $user_point) {
            $return['error'] = 1;
            $return['msg']   = 'S??? d?? t??i kho???n c???a b???n kh??ng ?????.';
            die(json_encode($return));
        } else if ($buff_like_amount < $check_service['service_min_amount']) {
            $return['error'] = 1;
            $return['msg']   = 'Vui l??ng mua t???i thi???u ' . $check_service['service_min_amount'] . ' Follows.';
            die(json_encode($return));
        } else if (!$check_info_facebook['id']) {
            $return['error'] = 1;
            $return['msg']   = 'ID Facebook n??y kh??ng h???p l??? ho???c t??i kho???n ???? b??? kh??a.';
            die(json_encode($return));
        } else if ($buff_like_facebook_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id Facebook n??y ???? t???n t???i tr??n h??? th???ng.';
            die(json_encode($return));
        } else {
            mysqli_query($conn, "UPDATE table_user SET user_point = user_point - '$total_payment' WHERE user_username = '$user_username'");
            mysqli_query($conn, "INSERT INTO table_history_buy(history_buy_username, history_buy_content, history_buy_point, history_buy_balance, history_buy_ip, history_buy_time) 
            VALUES ('$user_username', 'Mua t??ng theo d??i ng?????i d??ng', '$total_payment', '$user_point', '$history_buy_ip', '$buff_like_time')");
            if (mysqli_query($conn, "INSERT INTO table_buff_like(buff_like_username, buff_like_facebook_name, buff_like_facebook, buff_like_service, buff_like_content, buff_like_reaction, buff_like_amount, buff_like_comment, buff_like_type, buff_like_gender, buff_like_origin, buff_like_increased, buff_like_present, buff_like_payment, buff_like_status, buff_like_time) 
            VALUES ('$user_username', '$buff_like_facebook_name', '$buff_like_facebook', '$buff_like_service', '$buff_like_content', 'NO', '$buff_like_amount', 'NO', '$buff_like_type', '$buff_like_gender', '$buff_like_origin', '0', '$buff_like_present', '$total_payment', 'progress', '$buff_like_time')")) {
                $return['msg'] = 'Th??m ID t??ng theo d??i th??nh c??ng.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'B???n kh??ng c?? quy???n truy c???p b???n quy???n';
                die(json_encode($return));
            }
        }
        
    }

}
?>