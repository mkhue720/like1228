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
                                <h5 class="mb-4">Đăng nhập tài khoản</h5>
                            </center>
                            <form action="#" id="login" data-url="users/login" class="form-horizontal" method="POST">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Tài khoản :</label>
                                            <input type="text" class="form-control" id="user_username"
                                                placeholder="Nhập tài khoản" required="">
                                        </div>

                                        <div class="form-group">
                                            <label>Mật khẩu :</label>
                                            <input type="password" class="form-control" id="user_password"
                                                placeholder="Nhập mật khẩu" required="">
                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input"
                                                        id="customControlInline" checked="">
                                                    <label class="custom-control-label" for="customControlInline">Ghi
                                                        nhớ đăng nhập?</label>
                                                </div>
                                            </div>
                                            <!-- <div class="col-md-6">
                                                <div class="text-md-right mt-3 mt-md-0">
                                                    <a href="#" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</a>
                                                </div>
                                            </div> -->
                                        </div>
                                        <div class="mt-4">
                                            <button type="button"
                                                class="btn btn-success btn-block waves-effect waves-light" id="submit"
                                                onclick="login();">ĐĂNG NHẬP</button>
                                        </div>
                                        <div class="mt-4 text-center">
                                            <a href="/register" ajax-page="register" class="text-muted"><i
                                                    class="mdi mdi-account-circle mr-1"></i> Bạn chưa có tài khoản ?
                                                <a href="dang-ky"
                                                    class="btn btn-primary btn-sm btn-rounded waves-effect">Đăng ký
                                                    tài khoản</a></a>
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
function login() {
    var user_username = $('#user_username').val();
    var user_password = $('#user_password').val();
    if (!user_username) {
        swalalert("Vui lòng nhập tài khoản.", "info");
        return;
    }
    if (!user_password) {
        swalalert("Vui lòng nhập mật khẩu.", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_account_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'login',
            user_username: user_username,
            user_password: user_password
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class=\"fa fa-lock\"></i> Đăng nhập');
        },
        success: (data) => {
            if (data.error) {
                swalalert(data.msg, "error");
            } else {
                swalalert(data.msg, "success");
                setTimeout(function() {
                    window.location.href = '/trang-chu';
                }, 1000);
            }
        }
    })
}
</script>