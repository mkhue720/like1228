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
                                Thêm ngân hàng
                            </h4>
                            <form action="" method="POST">
                                <div class="form-group">
                                    <label>Tên ngân hàng: (nếu không cần thì nhập false)</label>
                                    <input id="banks_name" type="text" class="form-control"
                                        placeholder="Nhập tên ngân hàng." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Ảnh ngân hàng:</label>
                                    <input id="banks_images" type="text" class="form-control"
                                        placeholder="Nhập địa chỉ hình ảnh." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Chủ tài khoản:</label>
                                    <input id="banks_account_holder" type="text" class="form-control"
                                        placeholder="Nhập tên chủ tài khoản." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Số tài khoản:</label>
                                    <input id="banks_number_holder" type="number" class="form-control"
                                        placeholder="Nhập số tài khoản." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Chi nhánh: (nếu không cần thì nhập false)</label>
                                    <input id="banks_branch" type="text" class="form-control"
                                        placeholder="Nhập chi nhánh của ngân hàng." autocomplete="off" required="">
                                </div>
                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="add_banks();"><i class="fa fa-plus-circle"></i>
                                        Thêm ngân hàng</button>
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
function add_banks() {
    var banks_name = $('#banks_name').val();
    var banks_images = $('#banks_images').val();
    var banks_account_holder = $('#banks_account_holder').val();
    var banks_number_holder = $('#banks_number_holder').val();
    var banks_branch = $('#banks_branch').val();
    if (!banks_name) {
        swalalert("Vui nhập tên ngân hàng.", "info");
        return;
    }
    if (!banks_images) {
        swalalert("Vui lòng nhập địa chỉ hình ảnh.", "info");
        return;
    }
    if (!banks_account_holder) {
        swalalert("Vui nhập tên chủ tài khoản.", "info");
        return;
    }
    if (!banks_number_holder) {
        swalalert("Vui lòng nhập số tài khoản.", "info");
        return;
    }
    if (!banks_branch) {
        swalalert("Vui nhập chi nhánh của ngân hàng.", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_system_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'add_banks',
            banks_name: banks_name,
            banks_images: banks_images,
            banks_account_holder: banks_account_holder,
            banks_number_holder: banks_number_holder,
            banks_branch: banks_branch
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class=\"fa fa-lock\"></i> Thực hiện');
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
