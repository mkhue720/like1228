<?php
include_once "../_config.php";
if ($_REQUEST) {
    $return = array(
        'error' => 0
    );
    $type   = $_REQUEST['type'];
    if ($type === 'edit_settings') {
        $settings_title         = htmlspecialchars(addslashes($_POST['settings_title']));
        $settings_logo          = htmlspecialchars(addslashes($_POST['settings_logo']));
        $settings_name          = htmlspecialchars(addslashes($_POST['settings_name']));
        $settings_keyword       = htmlspecialchars(addslashes($_POST['settings_keyword']));
        $settings_domain        = htmlspecialchars(addslashes($_POST['settings_domain']));
        $settings_card24h      = htmlspecialchars(addslashes($_POST['settings_card24h']));
        $settings_discount      = htmlspecialchars(addslashes($_POST['settings_discount']));
        $settings_facebook      = htmlspecialchars(addslashes($_POST['settings_facebook']));
        $settings_fanpage       = htmlspecialchars(addslashes($_POST['settings_fanpage']));
        $settings_noti          = $_POST['settings_noti'];
        $settings_mail_account = htmlspecialchars(addslashes($_POST['settings_mail_account']));
        $settings_mail_password = htmlspecialchars(addslashes($_POST['settings_mail_password']));
        $settings_token         = htmlspecialchars(addslashes($_POST['settings_token']));
        $settings_status        = htmlspecialchars(addslashes($_POST['settings_status']));
        if ($user_level != 4) {
            $return['error'] = 1;
            $return['msg']   = 'Bạn không phải là quản trị viên.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_settings SET settings_title = '$settings_title', settings_logo = '$settings_logo', settings_name = '$settings_name', settings_keyword = '$settings_keyword', settings_domain = '$settings_domain', settings_card24h = '$settings_card24h', settings_discount = '$settings_discount', settings_facebook = '$settings_facebook', settings_fanpage = '$settings_fanpage', settings_noti = '$settings_noti', settings_mail_account = '$settings_mail_account', settings_mail_password = '$settings_mail_password', settings_token = '$settings_token', settings_status = '$settings_status'  WHERE settings_id = '1'")) {
                $return['msg'] = 'Chỉnh sử thông tin website thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    
    if ($type === 'add_banks') {
        $banks_name            = htmlspecialchars(addslashes($_POST['banks_name']));
        $banks_images          = htmlspecialchars(addslashes($_POST['banks_images']));
        $banks_account_holder  = htmlspecialchars(addslashes($_POST['banks_account_holder']));
        $banks_number_holder   = htmlspecialchars(addslashes($_POST['banks_number_holder']));
        $banks_branch          = htmlspecialchars(addslashes($_POST['banks_branch']));
        $banks_time            = time();
        $check_banks_available = mysqli_num_rows(mysqli_query($conn, "SELECT banks_id FROM table_banks WHERE banks_number_holder = '$banks_number_holder'"));
        if ($user_level != 4) {
            $return['error'] = 1;
            $return['msg']   = 'Bạn không phải là quản trị viên.';
            die(json_encode($return));
        } else if ($check_banks_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Ngân hàng này đã tồn tại trên hệ thống';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "INSERT INTO table_banks(banks_name, banks_images, banks_account_holder, banks_number_holder, banks_branch, banks_status, banks_time) 
            VALUES ('$banks_name', '$banks_images', '$banks_account_holder', '$banks_number_holder', '$banks_branch', 'true', '$banks_time')")) {
                $return['msg'] = 'Thêm ngân hàng thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }



    if ($type === 'delete_banks') {
        $banks_id    = htmlspecialchars(addslashes($_POST['banks_id']));
        $check_banks = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_banks WHERE banks_id = '$banks_id'"));
        if ($check_banks == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID Ngân hàng này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "DELETE FROM table_banks WHERE banks_id = '$banks_id'")) {
                $return['msg'] = 'Bạn đã xóa ngân hàng id ' . $banks_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }


    if ($type === 'edit_banks') {
        $banks_id              = htmlspecialchars(addslashes($_POST['banks_id']));
        $banks_name            = htmlspecialchars(addslashes($_POST['banks_name']));
        $banks_images          = htmlspecialchars(addslashes($_POST['banks_images']));
        $banks_account_holder  = htmlspecialchars(addslashes($_POST['banks_account_holder']));
        $banks_number_holder   = htmlspecialchars(addslashes($_POST['banks_number_holder']));
        $banks_branch          = htmlspecialchars(addslashes($_POST['banks_branch']));
        $banks_status          = htmlspecialchars(addslashes($_POST['banks_status']));
        $check_banks          = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_banks WHERE banks_id = '$banks_id'"));
        if ($check_banks == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID ngân hàng này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_banks SET banks_name = '$banks_name', banks_images = '$banks_images', banks_account_holder = '$banks_account_holder', banks_number_holder = '$banks_number_holder', banks_branch = '$banks_branch', banks_status = '$banks_status' WHERE banks_id = '$banks_id'")) {
                $return['msg'] = 'Chỉnh sửa ngân hàng cho id ' . $banks_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }

    
    if ($type === 'add_service') {
        $service_title           = htmlspecialchars(addslashes($_POST['service_title']));
        $service_slug            = htmlspecialchars(addslashes($_POST['service_slug']));
        $service_category        = htmlspecialchars(addslashes($_POST['service_category']));
        $service_content         = $_POST['service_content'];
        $service_point           = htmlspecialchars(addslashes($_POST['service_point']));
        $service_min_amount      = htmlspecialchars(addslashes($_POST['service_min_amount']));
        $service_max_amount      = htmlspecialchars(addslashes($_POST['service_max_amount']));
        $service_warranty        = htmlspecialchars(addslashes($_POST['service_warranty']));
        $service_gender          = htmlspecialchars(addslashes($_POST['service_gender']));
        $service_reaction_love   = htmlspecialchars(addslashes($_POST['service_reaction_love']));
        $service_reaction_care   = htmlspecialchars(addslashes($_POST['service_reaction_care']));
        $service_reaction_haha   = htmlspecialchars(addslashes($_POST['service_reaction_haha']));
        $service_reaction_wow    = htmlspecialchars(addslashes($_POST['service_reaction_wow']));
        $service_reaction_sad    = htmlspecialchars(addslashes($_POST['service_reaction_sad']));
        $service_reaction_angry  = htmlspecialchars(addslashes($_POST['service_reaction_angry']));
        $service_status          = 'true';
        $service_time            = time();
        $check_service_available = mysqli_num_rows(mysqli_query($conn, "SELECT service_id FROM table_service WHERE service_slug = '$service_slug'"));
        if ($check_service_available > 0) {
            $return['error'] = 1;
            $return['msg']   = 'Dịch vụ này đã tồn tại trên hệ thống';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "INSERT INTO table_service(service_title, service_slug, service_category, service_content, service_point, service_min_amount, service_max_amount, service_warranty, service_gender, service_reaction_love, service_reaction_care, service_reaction_haha, service_reaction_wow, service_reaction_sad, service_reaction_angry, service_status, service_time) 
            VALUES ('$service_title', '$service_slug', '$service_category', '$service_content', '$service_point', '$service_min_amount', '$service_max_amount', '$service_warranty', '$service_gender', '$service_reaction_love', '$service_reaction_care', '$service_reaction_haha', '$service_reaction_wow', '$service_reaction_sad', '$service_reaction_angry', '$service_status', '$service_time')")) {
                $return['msg'] = 'Thêm bài dịch vụ mới thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'edit_service') {
        $service_id             = htmlspecialchars(addslashes($_POST['service_id']));
        $service_title          = htmlspecialchars(addslashes($_POST['service_title']));
        $service_slug           = htmlspecialchars(addslashes($_POST['service_slug']));
        $service_category       = htmlspecialchars(addslashes($_POST['service_category']));
        $service_content        = $_POST['service_content'];
        $service_point          = htmlspecialchars(addslashes($_POST['service_point']));
        $service_min_amount     = htmlspecialchars(addslashes($_POST['service_min_amount']));
        $service_max_amount     = htmlspecialchars(addslashes($_POST['service_max_amount']));
        $service_warranty       = htmlspecialchars(addslashes($_POST['service_warranty']));
        $service_gender         = htmlspecialchars(addslashes($_POST['service_gender']));
        $service_reaction_love  = htmlspecialchars(addslashes($_POST['service_reaction_love']));
        $service_reaction_care  = htmlspecialchars(addslashes($_POST['service_reaction_care']));
        $service_reaction_haha  = htmlspecialchars(addslashes($_POST['service_reaction_haha']));
        $service_reaction_wow   = htmlspecialchars(addslashes($_POST['service_reaction_wow']));
        $service_reaction_sad   = htmlspecialchars(addslashes($_POST['service_reaction_sad']));
        $service_reaction_angry = htmlspecialchars(addslashes($_POST['service_reaction_angry']));
        $service_status         = 'true';
        $service_time           = time();
        $check_service          = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_service WHERE service_id = '$service_id'"));
        if ($check_service == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID dịch vụ này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_service SET service_title = '$service_title', service_slug = '$service_slug', service_category = '$service_category', service_content = '$service_content', service_point = '$service_point', service_min_amount = '$service_min_amount', service_max_amount = '$service_max_amount', service_warranty = '$service_warranty', service_gender = '$service_gender', service_reaction_love = '$service_reaction_love', service_reaction_care = '$service_reaction_care', service_reaction_haha = '$service_reaction_haha', service_reaction_wow = '$service_reaction_wow', service_reaction_sad = '$service_reaction_sad', service_reaction_angry = '$service_reaction_angry' WHERE service_id = '$service_id'")) {
                $return['msg'] = 'Chỉnh sửa dịch vụ cho id ' . $service_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'delete_service') {
        $service_id    = htmlspecialchars(addslashes($_POST['service_id']));
        $check_service = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_service WHERE service_id = '$service_id'"));
        if ($check_service == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID dịch vụ này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "DELETE FROM table_service WHERE service_id = '$service_id'")) {
                $return['msg'] = 'Bạn đã xóa dịch vụ id ' . $service_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'edit_member') {
        $user_username = htmlspecialchars(addslashes($_POST['user_username']));
        $user_fullname = htmlspecialchars(addslashes($_POST['user_fullname']));
        $user_email    = htmlspecialchars(addslashes($_POST['user_email']));
        $user_phone    = htmlspecialchars(addslashes($_POST['user_phone']));
        $user_facebook = htmlspecialchars(addslashes($_POST['user_facebook']));
        $user_level    = htmlspecialchars(addslashes($_POST['user_level']));
        $check_user    = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_username = '$user_username'"));
        if ($check_user == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Username thành viên này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_user SET user_username = '$user_username', user_fullname = '$user_fullname', user_email = '$user_email', user_phone = '$user_phone', user_facebook = '$user_facebook', user_level = '$user_level' WHERE user_username = '$user_username'")) {
                $return['msg'] = 'Chỉnh sửa thành viên ' . $user_username . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'edit_point') {
        $user_username   = htmlspecialchars(addslashes($_POST['user_username']));
        $user_point      = htmlspecialchars(addslashes($_POST['user_point']));
        $user_type_point = htmlspecialchars(addslashes($_POST['user_type_point']));
        $check_user      = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_username = '$user_username'"));
        if ($check_user == 0) {
            $return['error'] = 1;
            $return['msg']   = 'Username thành viên này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_user SET user_point = user_point $user_type_point '$user_point' WHERE user_username = '$user_username'")) {
                $return['msg'] = 'Chỉnh sửa tiền cho thành viên ' . $user_username . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'delete_member') {
        $user_id    = htmlspecialchars(addslashes($_POST['user_id']));
        $check_user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_id = '$user_id'"));
        if ($check_service == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID thành viên này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "DELETE FROM table_user WHERE user_id = '$user_id'")) {
                $return['msg'] = 'Bạn đã xóa thành viên id ' . $user_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'user_blocked') {
        $user_id    = htmlspecialchars(addslashes($_POST['user_id']));
        $check_user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_id = '$user_id'"));
        if ($check_user == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID thành viên này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_user SET user_blocked = '1' WHERE user_id = '$user_id'")) {
                $return['msg'] = 'Bạn đã khóa thành viên id ' . $user_id . ' thành công.';
                die(json_encode($return));
            } else {
                $return['error'] = 1;
                $return['msg']   = 'Bạn không có quyền truy cập bản quyền';
                die(json_encode($return));
            }
        }
        
    }
    
    if ($type === 'user_unblocked') {
        $user_id    = htmlspecialchars(addslashes($_POST['user_id']));
        $check_user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM table_user WHERE user_id = '$user_id'"));
        if ($check_user == 0) {
            $return['error'] = 1;
            $return['msg']   = 'ID thành viên này không tồn tại trên hệ thống.';
            die(json_encode($return));
        } else {
            if (mysqli_query($conn, "UPDATE table_user SET user_blocked = '0' WHERE user_id = '$user_id'")) {
                $return['msg'] = 'Bạn đã mở khóa thành viên id ' . $user_id . ' thành công.';
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