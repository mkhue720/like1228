<?php
include_once "../../../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'buff_share') {
        $buff_like_facebook           = htmlspecialchars(addslashes($_POST['buff_like_facebook']));
        $buff_like_service            = htmlspecialchars(addslashes($_POST['buff_like_service']));
        $buff_like_content            = htmlspecialchars(addslashes($_POST['buff_like_content']));
        $buff_like_amount             = htmlspecialchars(addslashes($_POST['buff_like_amount']));
        $buff_like_type               = htmlspecialchars(addslashes($_POST['buff_like_type']));
        $buff_like_gender             = htmlspecialchars(addslashes($_POST['buff_like_gender']));
        $buff_like_time               = time();
        $history_buy_ip              = $_SERVER['REMOTE_ADDR'];
        $check_service                = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_service WHERE service_slug = '$buff_like_service'"));
        $total_payment                = $check_service['service_point'] * $buff_like_amount;
        $check_info_facebook          = json_decode(file_get_contents('https://graph.facebook.com/' . $buff_like_facebook . '/?access_token=' . $settings_token), true);
        $check_share_facebook         = json_decode(file_get_contents('https://graph.facebook.com/v1.0/' . $check_info_facebook['from']['id'] . '_' . $buff_like_facebook . '?fields=shares.summary(true)&access_token=' . $settings_token), true);
        $buff_like_facebook_name      = $check_info_facebook['from']['name'];
        $buff_like_origin             = $check_share_facebook['shares']['count'];
        $buff_like_present            = $check_share_facebook['shares']['count'];
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
            $return['msg']   = 'Số dư tài khoản của bạn không đủ.';
            die(json_encode($return));
        } else if ($buff_like_amount < $check_service['service_min_amount']) {
            $return['error'] = 1;
            $return['msg']   = 'Vui lòng mua tối thiểu ' . $check_service['service_min_amount'] . ' like.';
            die(json_encode($return));
        } else if (!$check_info_facebook['id']) {
            $return['error'] = 1;
            $return['msg']   = 'ID Facebook này không hợp lệ hoặc tài khoản đã bị khóa.';
            die(json_encode($return));
        } else if ($buff_like_facebook_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id Facebook này đã tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            mysqli_query($conn, "UPDATE table_user SET user_point = user_point - '$total_payment' WHERE user_username = '$user_username'");
            mysqli_query($conn, "INSERT INTO table_history_buy(history_buy_username, history_buy_content, history_buy_point, history_buy_balance, history_buy_ip, history_buy_time) 
            VALUES ('$user_username', 'Mua tăng chia sẽ bài viết.', '$total_payment', '$user_point', '$history_buy_ip', '$buff_like_time')");
            if (mysqli_query($conn, "INSERT INTO table_buff_like(buff_like_username, buff_like_facebook_name, buff_like_facebook, buff_like_service, buff_like_content, buff_like_reaction, buff_like_amount, buff_like_comment, buff_like_type, buff_like_gender, buff_like_origin, buff_like_increased, buff_like_present, buff_like_payment, buff_like_status, buff_like_time) 
            VALUES ('$user_username', '$buff_like_facebook_name', '$buff_like_facebook', '$buff_like_service', '$buff_like_content', 'NO', '$buff_like_amount', 'NO', '$buff_like_type', '$buff_like_gender', '$buff_like_origin', '0', '$buff_like_present', '$total_payment', 'progress', '$buff_like_time')")) {
                $return['msg'] = 'Thêm ID Tăng Like thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
}
?>