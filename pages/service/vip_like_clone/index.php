<?php
$result = mysqli_query($conn,"SELECT * FROM table_service WHERE service_slug = 'vip-like-clone-facebook'");
$row = mysqli_fetch_assoc($result);
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
                                <?=$row['service_title']?>
                            </h4>

                            <div class="alert alert-info">
                                <?=$row['service_content']?>
                            </div>
                            <form action="" id="service" method="POST">
                                <input type="hidden" id="action" value="vip">
                                <input type="hidden" id="service_config"
                                    value='{"service_point":<?=$row['service_point']?>,"service_min_amount":<?=$row['service_min_amount']?>,"service_max_amount":<?=$row['service_max_amount']?>}'>
                                <input type="hidden" name="type" value="like_clone">
                                <input type="hidden" name="category" value="facebook">
                                <div class="form-group">
                                    <label>ID / Link Facebook :</label>
                                    <input id="vip_like_facebook" type="text" class="form-control"
                                        placeholder="Nhập ID hoặc Link Facebook" autocomplete="off" required="">
                                </div>

                                <div class="form-group" style="display: none;">
                                    <label>Dịch vụ :</label>
                                    <input id="vip_like_service" type="text" class="form-control"
                                        placeholder="Nhập dịch vụ" value="<?=$row['service_slug']?>" autocomplete="off"
                                        required="">
                                </div>

                                <div class="form-group">
                                    <label>Ghi chú :</label>
                                    <textarea id="vip_like_content" rows="2" class="form-control"
                                        placeholder="Nhập ghi chú cho tiến trình hoặc bỏ trống"></textarea>
                                </div>

                                <div class="form-group">
                                    <label>Tốc độ :</label>
                                    <select name="like_speed" id="vip_like_speed" class="form-control">
                                        <option value="1">1 Like</option>
                                        <option value="2">2 Like</option>
                                        <option value="3">3 Like</option>
                                        <option value="4">4 Like</option>
                                        <option value="5">5 Like</option>
                                        <option value="6">6 Like</option>
                                        <option value="7">7 Like</option>
                                        <option value="8">8 Like</option>
                                        <option value="9">9 Like</option>
                                        <option value="10" selected>10 Like</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Cảm xúc :</label>
                                    <select id="vip_like_reaction" class="form-control">
                                        <option value="like">LIKE</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Số lượng ( <?=$row['service_min_amount']?> ~
                                        <?=$row['service_max_amount']?>):</label>
                                    <input type="number" class="form-control" name="amount" id="vip_like_amount"
                                        placeholder="Nhập số lượng cần mua" value="<?=$row['service_min_amount']?>"
                                        autofocus="">
                                </div>

                                <div class="form-group">
                                    <label>Số bài viết trong ngày :</label>
                                    <input type="number" class="form-control" name="amount_post"
                                        id="vip_like_amount_post" placeholder="Số bài viết đăng trong 1 ngày" value="5">
                                </div>

                                <div class="form-group">
                                    <label>Thời hạn :</label>
                                    <select name="expires" id="vip_like_expires" class="form-control">
                                        <option value="1">1 tháng</option>
                                        <option value="2">2 tháng</option>
                                        <option value="3">3 tháng</option>
                                        <option value="4">4 tháng</option>
                                        <option value="5">5 tháng</option>
                                        <option value="6">6 tháng</option>
                                    </select>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="card box-static bg-main">
                                            <div class="card-body">
                                                <span class="text">TỔNG THANH TOÁN</span> <br>
                                                <span class="number total_price" data-price="0">0</span>
                                                <span class="number">VND</span> <br>
                                                <span class="text pretext"
                                                    style="font-size: 14px;letter-spacing: 2px;">Bạn sẽ tăng
                                                    <span class="amount" data-amount="0">0</span> VIP
                                                    Like Clone với giá mỗi Like Clone là <span class="rate"
                                                        data-rate="0">0</span> VND / Like Clone</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="vip_like_clone();"><i class="fa fa-plus-circle"></i>
                                        Tạo tiến trình</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php require_once 'vip_like_clone_list.php'; ?>
        </div>
    </div>
</div>
<script>
function vip_like_clone() {
    var vip_like_facebook = $('#vip_like_facebook').val();
    var vip_like_service = $('#vip_like_service').val();
    var vip_like_content = $('#vip_like_content').val();
    var vip_like_speed = $('#vip_like_speed').val();
    var vip_like_reaction = $('#vip_like_reaction').val();
    var vip_like_amount = $('#vip_like_amount').val();
    var vip_like_amount_post = $('#vip_like_amount_post').val();
    var vip_like_expires = $('#vip_like_expires').val();
    if (!vip_like_facebook) {
        swalalert("Vui lòng nhập ID Facebook", "info");
        return;
    }
    if (!vip_like_service) {
        swalalert("Vui lòng nhập dịch vụ", "info");
        return;
    }
    if (!vip_like_content) {
        swalalert("Vui lòng nhập nội dung", "info");
        return;
    }
    if (!vip_like_speed) {
        swalalert("Vui lòng nhập nội dung", "info");
        return;
    }
    if (!vip_like_reaction) {
        swalalert("Vui lòng nhập cảm xúc", "info");
        return;
    }
    if (!vip_like_amount) {
        swalalert("Vui lòng số lượng", "info");
        return;
    }
    if (!vip_like_amount_post) {
        swalalert("Vui lòng nhập số lượng bài viết", "info");
        return;
    }
    if (!vip_like_expires) {
        swalalert("Vui lòng nhập thời hạn", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'service/vip_like_clone/',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'vip_like_clone',
            vip_like_facebook: vip_like_facebook,
            vip_like_service: vip_like_service,
            vip_like_content: vip_like_content,
            vip_like_speed: vip_like_speed,
            vip_like_reaction: vip_like_reaction,
            vip_like_amount: vip_like_amount,
            vip_like_amount_post: vip_like_amount_post,
            vip_like_expires: vip_like_expires
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class="fa fa-plus-circle"></i> Tạo tiến trình');
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