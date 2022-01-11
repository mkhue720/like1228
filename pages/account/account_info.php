<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">
                                <img src="/views/v1/images/icon/navbar/user.png" alt=""
                                    style="height: 27px;margin-right: 5px;">
                                Thông tin tài khoản
                            </h4> <br>

                            <form action="" id="info" method="POST">
                                <div class="form-group">
                                    <label>Tài khoản :</label>
                                    <input type="text" class="form-control" value="<?=$user_username;?>" disabled>
                                </div>
                                <div class="form-group">
                                    <label>Họ và tên :</label>
                                    <input type="text" class="form-control" id="user_fullname"
                                        value="<?=$user_fullname;?>" required="">
                                </div>
                                <div class="form-group">
                                    <label>Địa chỉ Email :</label>
                                    <input type="email" class="form-control" id="user_email" value="<?=$user_email;?>"
                                        required="">
                                </div>
                                <div class="form-group">
                                    <label>Số điện thoại :</label>
                                    <input type="number" class="form-control" id="user_phone" value="<?=$user_phone;?>"
                                        required="">
                                </div>
                                <div class="form-group">
                                    <label>ID Facebook :</label>
                                    <input type="number" class="form-control" id="user_facebook"
                                        value="<?=$user_facebook;?>" required="">
                                </div>
                                <div class="form-group">
                                    <label>Địa chỉ IP :</label>
                                    <input type="text" class="form-control" name="fb_id" value="<?=$user_ip;?>"
                                        disabled>
                                </div>
                                <button type="button" class="btn btn-success btn-rounded waves-effect" id="submit"
                                    onclick="change_info();">Cập nhật thông
                                    tin</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">
                                <img src="/views/v1/images/icon/navbar/user.png" alt=""
                                    style="height: 27px;margin-right: 5px;">
                                Đổi mật khẩu
                            </h4> <br>

                            <form action="" id="password" method="POST">
                                <div class="form-group">
                                    <label>Mật khẩu cũ :</label>
                                    <input type="password" class="form-control" id="user_password"
                                        placeholder="Nhập mật khẩu cũ" value="" required="">
                                </div>
                                <div class="form-group">
                                    <label>Mật khẩu mới :</label>
                                    <input type="password" class="form-control" id="user_new_password"
                                        placeholder="Nhập mật khẩu mới" value="" required="">
                                </div>
                                <div class="form-group">
                                    <label>Nhập lại mật khẩu mới :</label>
                                    <input type="password" class="form-control" id="user_confirm_password"
                                        placeholder="Nhập lại mật khẩu mới" value="" required="">
                                </div>
                                <button type="button" class="btn btn-danger btn-rounded waves-effect"
                                    id="submit1" onclick="change_password();">Đổi mật
                                    khẩu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php require_once 'account_info_list.php'; ?>
        </div>
    </div>
</div>
<script>
function change_info() {
    var user_fullname = $('#user_fullname').val();
    var user_email = $('#user_email').val();
    var user_phone = $('#user_phone').val();
    var user_facebook = $('#user_facebook').val();
    if (!user_fullname) {
        swalalert("Vui lòng nhập họ và tên.", "info");
        return;
    }
    if (!user_email) {
        swalalert("Vui lòng nhập email.", "info");
        return;
    }
    if (!user_phone) {
        swalalert("Vui lòng nhập số điện thoại", "info");
        return;
    }
    if (!user_facebook) {
        swalalert("Vui lòng nhập id facebook", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_account_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'change_info',
            user_fullname: user_fullname,
            user_email: user_email,
            user_phone: user_phone,
            user_facebook: user_facebook
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class="fa fa-upload"></i> Cập nhật');
        },
        success: (data) => {
            if (data.error) {
                swalalert(data.msg, "error");
            } else {
                swalalert(data.msg, "success");
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        }
    })
}
</script>
<script>
function change_password() {
    var user_password = $('#user_password').val();
    var user_new_password = $('#user_new_password').val();
    var user_confirm_password = $('#user_confirm_password').val();
    if (!user_password) {
        swalalert("Vui lòng nhập mật khẩu cũ.", "info");
        return;
    }
    if (!user_new_password) {
        swalalert("Vui lòng nhập mật khẩu mới.", "info");
        return;
    }
    if (!user_confirm_password) {
        swalalert("Vui lòng nhập lại mật khẩu mới", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_account_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'change_password',
            user_password: user_password,
            user_new_password: user_new_password,
            user_confirm_password: user_confirm_password
        },
        beforeSend: function() {
            wait('#submit1', false);
        },
        complete: function() {
            wait('#submit1', true, '<i class="fa fa-lock"></i> Đổi mật khẩu');
        },
        success: (data) => {
            if (data.error) {
                swalalert(data.msg, "error");
            } else {
                swalalert(data.msg, "success");
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        }
    })
}
</script>