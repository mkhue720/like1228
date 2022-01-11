<?php
include_once "../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'vip_like_progress') {
        $vip_like_id    = htmlspecialchars(addslashes($_POST['vip_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_vip_like WHERE vip_like_id = '$vip_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_vip_like SET vip_like_status = 'progress' WHERE vip_like_id = '$vip_like_id'")) {
                $return['msg'] = 'Trạng thái chờ duyệt cho id vip like ' . $vip_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'vip_like_running') {
        $vip_like_id    = htmlspecialchars(addslashes($_POST['vip_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_vip_like WHERE vip_like_id = '$vip_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_vip_like SET vip_like_status = 'running' WHERE vip_like_id = '$vip_like_id'")) {
                $return['msg'] = 'Trạng thái đang chạy cho id vip like ' . $vip_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'vip_like_complete') {
        $vip_like_id    = htmlspecialchars(addslashes($_POST['vip_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_vip_like WHERE vip_like_id = '$vip_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_vip_like SET vip_like_status = 'complete' WHERE vip_like_id = '$vip_like_id'")) {
                $return['msg'] = 'Trạng thái hoàn thành cho id vip like ' . $vip_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    
    if ($type === 'vip_like_blocked') {
        $vip_like_id    = htmlspecialchars(addslashes($_POST['vip_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_vip_like WHERE vip_like_id = '$vip_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_vip_like SET vip_like_status = 'blocked' WHERE vip_like_id = '$vip_like_id'")) {
                $return['msg'] = 'Trạng thái mở khóa cho id vip like ' . $vip_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    
    if ($type === 'buff_like_progress') {
        $buff_like_id   = htmlspecialchars(addslashes($_POST['buff_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_buff_like WHERE buff_like_id = '$buff_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_buff_like SET buff_like_status = 'progress' WHERE buff_like_id = '$buff_like_id'")) {
                $return['msg'] = 'Trạng thái chờ duyệt cho id vip like ' . $buff_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'buff_like_running') {
        $buff_like_id   = htmlspecialchars(addslashes($_POST['buff_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_buff_like WHERE buff_like_id = '$buff_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_buff_like SET buff_like_status = 'running' WHERE buff_like_id = '$buff_like_id'")) {
                $return['msg'] = 'Trạng thái đang chạy cho id vip like ' . $buff_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'buff_like_complete') {
        $buff_like_id   = htmlspecialchars(addslashes($_POST['buff_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_buff_like WHERE buff_like_id = '$buff_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_buff_like SET buff_like_status = 'complete' WHERE buff_like_id = '$buff_like_id'")) {
                $return['msg'] = 'Trạng thái hoàn thành cho id vip like ' . $buff_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    
    if ($type === 'buff_like_blocked') {
        $buff_like_id   = htmlspecialchars(addslashes($_POST['buff_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_buff_like WHERE buff_like_id = '$buff_like_id'"));
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_buff_like SET buff_like_status = 'blocked' WHERE buff_like_id = '$buff_like_id'")) {
                $return['msg'] = 'Trạng thái mở khóa cho id vip like ' . $buff_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }

    if ($type === 'vip_like_delete') {
        $vip_like_id   = htmlspecialchars(addslashes($_POST['vip_like_id']));
        $check_vip_like = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_vip_like WHERE vip_like_id = '$vip_like_id'"));
        $vip_like_expires = $check_vip_like['vip_like_expires'];
        $vip_like_time = time();
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        }else if ($vip_like_expires > $vip_like_time) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này vẫn chưa hết hạn nên không thể xóa.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "DELETE FROM table_vip_like WHERE vip_like_id = '$vip_like_id'")) {
                $return['msg'] = 'Bạn đã xóa id vip like ' . $vip_like_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    
    if ($type === 'vip_like_extend') {
        $vip_like_id          = htmlspecialchars(addslashes($_POST['vip_like_id']));
        $vip_like_expires     = htmlspecialchars(addslashes($_POST['vip_like_expires']));
        $check_vip_like       = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_vip_like WHERE vip_like_id = '$vip_like_id'"));
        $vip_like_amount      = $check_vip_like['vip_like_amount'];
        $vip_like_amount_post = $check_vip_like['vip_like_amount_post'];
        $vip_like_facebook    = $check_vip_like['vip_like_facebook'];
        $vip_like_time        = $check_vip_like['vip_like_expires'];
        $history_buy_ip       = $_SERVER['REMOTE_ADDR'];
        $vip_like_service     = $check_vip_like['vip_like_service'];
        $check_service        = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_service WHERE service_slug = '$vip_like_service'"));
        $check_info_facebook  = json_decode(file_get_contents('https://graph.facebook.com/' . $vip_like_facebook . '?fields=name,id&access_token=' . $settings_token), true);
        $total_payment        = $check_service['service_point'] * $vip_like_amount * $vip_like_amount_post * $vip_like_expires;
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
        $vip_like_expires = $vip_like_time + 1 * $vip_like_expires * 86400 - 28800;
        if ($check_vip_like == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Id vip like này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else if ($total_payment > $user_point) {
            $return['error'] = 1;
            $return['msg']   = 'Số dư tài khoản của bạn không đủ.';
            die(json_encode($return));
        } else if (!$check_info_facebook['id']) {
            $return['error'] = 1;
            $return['msg']   = 'ID Facebook này không hợp lệ hoặc tài khoản đã bị khóa.';
            die(json_encode($return));
        } else {
            mysqli_query($conn, "UPDATE table_user SET user_point = user_point - '$total_payment' WHERE user_username = '$user_username'");
            mysqli_query($conn, "INSERT INTO table_history_buy(history_buy_username, history_buy_content, history_buy_point, history_buy_balance, history_buy_ip, history_buy_time) 
            VALUES ('$user_username', 'Gia hạn vip like người dùng.', '$total_payment', '$user_point', '$history_buy_ip', '$vip_like_time')");
            if (mysqli_query($conn, "UPDATE table_vip_like SET vip_like_expires = '$vip_like_expires', vip_like_status = 'progress' WHERE vip_like_id = '$vip_like_id'")) {
                $return['msg'] = 'Gia hạn cho id vip like ' . $vip_like_id . ' thành công.';
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