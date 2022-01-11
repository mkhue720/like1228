<?php 
if($user_level != 4){
    die('<script type="text/javascript">window.location = "/404.php";</script>');
}
?>
<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">
                                <img src="/views/v1/images/icon/service/facebook/vip_like_clone.png" alt=""
                                    style="height: 27px;margin-right: 5px;">
                                Cài đặt thông tin trang web
                            </h4>
                            <form action="" method="POST">
                                <div class="form-group">
                                    <label>Tiêu đề :</label>
                                    <input id="settings_title" type="text" class="form-control"
                                        value="<?=$settings_title;?>" placeholder="Nhập tiêu đề." autocomplete="off"
                                        required="">
                                </div>
                                <div class="form-group">
                                    <label>Ảnh logo :</label>
                                    <input id="settings_logo" type="text" class="form-control"
                                        value="<?=$settings_logo;?>" placeholder="Nhập ảnh logo." autocomplete="off"
                                        required="">
                                </div>

                                <div class="form-group">
                                    <label>Tên miền hoa :</label>
                                    <input id="settings_name" type="text" class="form-control"
                                        value="<?=$settings_name;?>" placeholder="Nhập tên miền hoa." autocomplete="off"
                                        required="">
                                </div>

                                <div class="form-group">
                                    <label>Từ khóa :</label>
                                    <input id="settings_keyword" type="text" class="form-control"
                                        value="<?=$settings_keyword;?>" placeholder="Nhập từ khóa." autocomplete="off"
                                        required="">
                                </div>

                                <div class="form-group">
                                    <label>Tên miền :</label>
                                    <input id="settings_domain" type="text" class="form-control"
                                        value="<?=$settings_domain;?>" placeholder="Nhập tên miền gồm http."
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Api key <a href="https://card24h.com" target="_blank">https://card24h.com</a></label>
                                    <input id="settings_card24h" type="text" class="form-control"
                                        value="<?=$settings_card24h;?>" placeholder="Nhập apikey bên card24h.com"
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Chiết khẩu nạp thẻ :</label>
                                    <input id="settings_discount" type="number" class="form-control"
                                        value="<?=$settings_discount;?>" placeholder="Nhập id chiếu khấu nạp thẻ"
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>ID Facebook :</label>
                                    <input id="settings_facebook" type="text" class="form-control"
                                        value="<?=$settings_facebook;?>" placeholder="Nhập id facebook của admin"
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Trang Facebook :</label>
                                    <input id="settings_fanpage" type="text" class="form-control"
                                        value="<?=$settings_fanpage;?>" placeholder="Nhập trang của admin"
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Thông báo :</label>
                                    <textarea id="settings_noti" rows="5" class="form-control ckeditor"
                                        placeholder="Nhập ghi chú cho tiến trình hoặc bỏ trống"><?=$settings_noti;?></textarea>
                                </div>

                                <div class="form-group">
                                    <label>Địa chỉ Mail:</label>
                                    <input id="settings_mail_account" type="text" class="form-control"
                                        value="<?=$settings_mail_account;?>" placeholder="Nhập địa chỉ mail."
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Mật khẩu ứng dụng Email:</label>
                                    <input id="settings_mail_password" type="text" class="form-control"
                                        value="<?=$settings_mail_password;?>" placeholder="Nhập mật khẩu ứng dụng mail."
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Token Facebook:</label>
                                    <input id="settings_token" type="text" class="form-control"
                                        value="<?=$settings_token;?>" placeholder="Nhập token clone của facebook."
                                        autocomplete="off" required="">
                                </div>

                                <div class="form-group">
                                    <label>Bảo trì:</label>
                                    <select id="settings_status" class="form-control">
                                        <option value="false">Có</option>
                                        <option value="true" selected>Không</option>
                                    </select>
                                </div>

                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="edit_settings();"><i class="fa fa-plus-circle"></i>
                                        Chỉnh sửa</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
function edit_settings() {
    var settings_title = $('#settings_title').val();
    var settings_logo = $('#settings_logo').val();
    var settings_name = $('#settings_name').val();
    var settings_keyword = $('#settings_keyword').val();
    var settings_domain = $('#settings_domain').val();
    var settings_card24h = $('#settings_card24h').val();
    var settings_discount = $('#settings_discount').val();
    var settings_facebook = $('#settings_facebook').val();
    var settings_fanpage = $('#settings_fanpage').val();
    var settings_noti = CKEDITOR.instances['settings_noti'].getData();
    var settings_mail_account = $('#settings_mail_account').val();
    var settings_mail_password = $('#settings_mail_password').val();
    var settings_token = $('#settings_token').val();
    var settings_status = $('#settings_status').val();
    if (!settings_title) {
        swalalert("Vui lòng nhập tiêu đề.", "info");
        return;
    }
    if (!settings_logo) {
        swalalert("Vui lòng nhập ảnh logo.", "info");
        return;
    }
    if (!settings_name) {
        swalalert("Vui lòng nhập tên miền viết hoa.", "info");
        return;
    }
    if (!settings_keyword) {
        swalalert("Vui lòng nhập từ khóa.", "info");
        return;
    }
    if (!settings_domain) {
        swalalert("Vui lòng nhập tên miền gồm https.", "info");
        return;
    }
    if (!settings_card24h) {
        swalalert("Vui lòng nhập apikey bên card24h.com.", "info");
        return;
    }
    if (!settings_discount) {
        swalalert("Vui lòng nhập chiết khấu nạp thẻ.", "info");
        return;
    }
    if (!settings_facebook) {
        swalalert("Vui lòng nhập id facebook.", "info");
        return;
    }
    if (!settings_fanpage) {
        swalalert("Vui lòng nhập fanpage facebook.", "info");
        return;
    }
    if (!settings_noti) {
        swalalert("Vui lòng nhập thông báo.", "info");
        return;
    }
    if (!settings_mail_account) {
        swalalert("Vui lòng nhập địa chỉ email.", "info");
        return;
    }
    if (!settings_mail_password) {
        swalalert("Vui lòng nhập mật khẩu ứng dụng email.", "info");
        return;
    }
    if (!settings_token) {
        swalalert("Vui lòng nhập token check live.", "info");
        return;
    }
    if (!settings_status) {
        swalalert("Vui lòng nhập trạng thái.", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'edit_settings',
            settings_title: settings_title,
            settings_logo: settings_logo,
            settings_name: settings_name,
            settings_keyword: settings_keyword,
            settings_domain: settings_domain,
            settings_card24h: settings_card24h,
            settings_discount: settings_discount,
            settings_facebook: settings_facebook,
            settings_fanpage: settings_fanpage,
            settings_noti: settings_noti,
            settings_mail_account: settings_mail_account,
            settings_mail_password: settings_mail_password,
            settings_token: settings_token,
            settings_status: settings_status
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class=\"fa fa-lock\"></i> Chỉnh sửa');
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