<style>
    .card {
        border-radius: 10px;
        border: 1px solid #389AF0;
    }
    .bg-pattern {
        background-image: url(/views/v1/images/bg-auth.png);
        background-size: cover;
        background-position: center;
    }
</style>
<div class="account-pages my-5 pt-sm-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-5 col-sm-8">
                <div class="card">
                    <div class="card-body p-4">
                        <div class="p-2">
                            <center>
                                <img src="/views/v1/images/icon/service/facebook.png" alt="logo"
                                    style="height: 50px;margin: 10px;">
                                <h5 class="mb-4">Đăng ký tài khoản</h5>
                            </center>
                            <form action="#" id="register" data-url="users/register" class="form-horizontal"
                                method="POST">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Tài khoản</label>
                                            <input type="text" id="user_username" class="form-control"
                                                placeholder="Nhập tài khoản" required="" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <label>Họ và tên</label>
                                            <input type="text" id="user_fullname" class="form-control"
                                                placeholder="Nhập họ và tên" required="" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <label>Địa chỉ email</label>
                                            <input type="email" id="user_email" class="form-control"
                                                placeholder="Nhập địa chỉ email" required="" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <label>Số điện thoại</label>
                                            <input type="number" id="user_phone" class="form-control"
                                                placeholder="Nhập số điện thoại">
                                        </div>
                                        <div class="form-group">
                                            <label>ID tài khoản facebook</label>
                                            <input type="number" id="user_facebook" class="form-control"
                                                placeholder="Nhập id facebook" required="" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <label>Mật khẩu</label>
                                            <input type="password" id="user_password" class="form-control"
                                                placeholder="Nhập mật khẩu" required="" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <label>Nhập lại mật khẩu</label>
                                            <input type="password" id="user_confirm_password" class="form-control"
                                                placeholder="Nhập lại mật khẩu" required="" autocomplete="off">
                                        </div>
                                        <div class="mt-4">
                                            <button type="button"
                                                class="btn btn-success btn-block waves-effect waves-light" id="submit"
                                                onclick="register();">ĐĂNG
                                                KÝ</button>
                                        </div>
                                        <div class="mt-4 text-center">
                                            <a href="/dang-nhap"
                                                class="btn btn-danger btn-sm btn-rounded waves-effect">Đăng
                                                nhập tài
                                                khoản</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
function register() {
    var user_username = $('#user_username').val();
    var user_fullname = $('#user_fullname').val();
    var user_email = $('#user_email').val();
    var user_phone = $('#user_phone').val();
    var user_facebook = $('#user_facebook').val();
    var user_password = $('#user_password').val();
    var user_confirm_password = $('#user_confirm_password').val();
    if (!user_username) {
        swalalert("Vui lòng nhập tài khoản.", "info");
        return;
    }
    if (!user_fullname) {
        swalalert("Vui lòng nhập họ và tên.", "info");
        return;
    }
    if (!user_email) {
        swalalert("Vui lòng nhập địa chỉ email.", "info");
        return;
    }
    if (!user_phone) {
        swalalert("Vui lòng nhập số điện thoại.", "info");
        return;
    }
    if (!user_facebook) {
        swalalert("Vui lòng nhập id facebook.", "info");
        return;
    }
    if (!user_password) {
        swalalert("Vui lòng nhập mật khẩu.", "info");
        return;
    }
    if (!user_confirm_password) {
        swalalert("Vui lòng nhập lại mật khẩu.", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_account_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'register',
            user_username: user_username,
            user_fullname: user_fullname,
            user_email: user_email,
            user_phone: user_phone,
            user_facebook: user_facebook,
            user_password: user_password,
            user_confirm_password: user_confirm_password
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class=\"fa fa-lock\"></i> ĐĂNG KÝ');
        },
        success: (data) => {
            if (data.error) {
                swalalert(data.msg, "error");
            } else {
                swalalert(data.msg, "success");
                setTimeout(function() {
                    window.location.href = '/dang-nhap';
                }, 1000);
            }
        }
    })
}
</script>