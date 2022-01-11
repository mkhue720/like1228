<?php
include_once "../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'login') {
        $user_username             = htmlspecialchars(addslashes($_POST['user_username']));
        $user_password             = htmlspecialchars(addslashes($_POST['user_password']));
        $user_password             = md5($user_password);
        $history_account_ip        = $_SERVER['REMOTE_ADDR'];
        $history_account_useragent = $_SERVER['HTTP_USER_AGENT'];
        $history_account_time      = time();
        $check_username            = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_username = '$user_username'"));
        if ($check_username == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Tên đăng nhập không tồn tại';
            die(json_encode($return));
        } else if ($check_username['user_password'] != $user_password) {
            $return['error'] = 1;
            $return['msg']   = 'Sai mật khẩu rồi cha';
            die(json_encode($return));
        } else if ($check_username['user_blocked'] == 1) {
            $return['error'] = 1;
            $return['msg']   = 'Tài khoản của bạn đã bị khóa vui lòng liên hệ admin';
            die(json_encode($return));
        } else {
            setSession($check_username['user_id'], $user_username);
            if (mysqli_query($conn, "INSERT INTO table_history_account(history_account_username, history_account_content, history_account_ip, history_account_useragent, history_account_time) 
            VALUES ('$user_username', 'Đăng nhập vào tài khoản.', '$history_account_ip', '$history_account_useragent', '$history_account_time')")) {
                $return['msg'] = 'Đăng nhập thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'register') {
        $user_username            = htmlspecialchars(addslashes($_POST['user_username']));
        $user_fullname            = htmlspecialchars(addslashes($_POST['user_fullname']));
        $user_email               = htmlspecialchars(addslashes($_POST['user_email']));
        $user_phone               = htmlspecialchars(addslashes($_POST['user_phone']));
        $user_facebook            = htmlspecialchars(addslashes($_POST['user_facebook']));
        $user_password            = htmlspecialchars(addslashes($_POST['user_password']));
        $user_confirm_password    = htmlspecialchars(addslashes($_POST['user_confirm_password']));
        $user_password            = md5($user_password);
        $user_confirm_password    = md5($user_confirm_password);
        $user_ip                  = $_SERVER['REMOTE_ADDR'];
        $user_time                = time();
        $user_location            = json_decode(file_get_contents("http://ipinfo.io/{$user_ip}/json"));
        $check_username_available = mysqli_num_rows(mysqli_query($conn, "SELECT user_id FROM table_user WHERE user_username = '$user_username'"));
        $check_email_available    = mysqli_num_rows(mysqli_query($conn, "SELECT user_id FROM table_user WHERE user_email = '$user_email'"));
        if ($user_password != $user_confirm_password) {
            $return['error'] = 1;
            $return['msg']   = 'Nhập lại mật khẩu không đúng';
            die(json_encode($return));
        } else if (strlen($user_username) > 32 || strlen($user_username) < 5) {
            $return['error'] = 1;
            $return['msg']   = 'Tên đăng nhập phải bé hơn 32 kí tự và lớn hơn 5 kí tự.';
            die(json_encode($return));
        } else if (!preg_match("/^[a-zA-Z0-9]*$/", $user_username)) {
            $return['error'] = 1;
            $return['msg']   = 'Tên đăng nhập không bao gồm các kí tự đặc biệt và có dấu.';
            die(json_encode($return));
        } else if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
            $return['error'] = 1;
            $return['msg']   = 'Email không đúng định dạng';
            die(json_encode($return));
        } else if (strlen($user_phone) > 11 || strlen($user_phone) < 10) {
            $return['error'] = 1;
            $return['msg']   = 'Số điện thoại phải từ 10 đến 11 số.';
            die(json_encode($return));
        } else if (!preg_match("/^[0-9]*$/", $user_phone)) {
            $return['error'] = 1;
            $return['msg']   = 'Số điện thoại không bao gồm các kí tự đặc biệt và có dấu.';
            die(json_encode($return));
        } else if ($check_username_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Tên đăng nhập đã tồn tại trên hệ thống.';
            die(json_encode($return));
        } else if ($check_email_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Địa chỉ email đã tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "INSERT INTO table_user(user_username, user_password, user_fullname, user_email, user_phone, user_point, user_facebook, user_location, user_ip, user_level, user_blocked, user_time_last, user_time) 
            VALUES ('$user_username', '$user_password', '$user_fullname', '$user_email', '$user_phone', '100', '$user_facebook', '$user_location->region', '$user_ip', '1', '0', '$user_time', '$user_time')")) {
                $return['msg'] = 'Đăng ký tài khoản thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Có gì đó không ổn.';
                die(json_encode($return));
            }
        }
        
    }
    
    
    if ($type === 'change_info') {
        $user_fullname             = htmlspecialchars(addslashes($_POST['user_fullname']));
        $user_email                = htmlspecialchars(addslashes($_POST['user_email']));
        $user_phone                = htmlspecialchars(addslashes($_POST['user_phone']));
        $user_facebook             = htmlspecialchars(addslashes($_POST['user_facebook']));
        $user_time_last            = time();
        $history_account_ip        = $_SERVER['REMOTE_ADDR'];
        $history_account_useragent = $_SERVER['HTTP_USER_AGENT'];
        $check_info_facebook       = json_decode(file_get_contents('https://graph.facebook.com/' . $user_facebook . '?fields=name,id&access_token=' . $settings_token), true);
        if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
            $return['error'] = 1;
            $return['msg']   = 'Email không đúng định dạng';
            die(json_encode($return));
        } else if (strlen($user_phone) > 11 || strlen($user_phone) < 10) {
            $return['error'] = 1;
            $return['msg']   = 'Số điện thoại phải từ 10 đến 11 số.';
            die(json_encode($return));
        } else if (!preg_match("/^[0-9]*$/", $user_phone)) {
            $return['error'] = 1;
            $return['msg']   = 'Số điện thoại không bao gồm các kí tự đặc biệt và có dấu.';
            die(json_encode($return));
        } else if (!$check_info_facebook['id']) {
            $return['error'] = 1;
            $return['msg']   = 'ID Facebook này không hợp lệ hoặc tài khoản đã bị khóa.';
            die(json_encode($return));
        } else {
            mysqli_query($conn, "INSERT INTO table_history_account(history_account_username, history_account_content, history_account_ip, history_account_useragent, history_account_time) 
            VALUES ('$user_username', 'Cập nhật thông tin tài khoản.', '$history_account_ip', '$history_account_useragent', '$user_time_last')");
            if (mysqli_query($conn, "UPDATE table_user SET user_fullname = '$user_fullname', user_email = '$user_email', user_phone = '$user_phone', user_facebook = '$user_facebook', user_time_last = '$user_time_last' WHERE user_username = '$user_username'")) {
                $return['msg'] = 'Cập nhật thông tin thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'change_password') {
        $user_password             = htmlspecialchars(addslashes($_POST['user_password']));
        $user_new_password         = htmlspecialchars(addslashes($_POST['user_new_password']));
        $user_confirm_password     = htmlspecialchars(addslashes($_POST['user_confirm_password']));
        $user_new_password         = md5($user_new_password);
        $user_time_last            = time();
        $history_account_ip        = $_SERVER['REMOTE_ADDR'];
        $history_account_useragent = $_SERVER['HTTP_USER_AGENT'];
        $check_username            = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_username = '$user_username'"));
        if ($user_new_password != md5($user_confirm_password)) {
            $return['error'] = 1;
            $return['msg']   = 'Nhập lại mật khẩu không giống nhau';
            die(json_encode($return));
        } else if ($check_username['user_password'] != md5($user_password)) {
            $return['error'] = 1;
            $return['msg']   = 'Mật khẩu cũ không chính xác.';
            die(json_encode($return));
        } else {
            mysqli_query($conn, "INSERT INTO table_history_account(history_account_username, history_account_content, history_account_ip, history_account_useragent, history_account_time) 
            VALUES ('$user_username', 'Đổi mật khẩu tài khoản.', '$history_account_ip', '$history_account_useragent', '$user_time_last')");
            if (mysqli_query($conn, "UPDATE table_user SET user_password = '$user_new_password', user_time_last = '$user_time_last' WHERE user_username = '$user_username'")) {
                $return['msg'] = 'Đổi mật khẩu tài khoản thành công.';
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