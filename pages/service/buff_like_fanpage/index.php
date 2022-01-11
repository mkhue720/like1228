<?php
$result = mysqli_query($conn,"SELECT * FROM table_service WHERE service_slug = 'buff-like-fanpage-facebook'");
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
                                <img src="/views/v1/images/icon/service/facebook/sub.png" alt=""
                                    style="height: 27px;margin-right: 5px;">
                                <?=$row['service_title']?>
                            </h4>

                            <div class="alert alert-info">
                                <?=$row['service_content']?>
                            </div>

                            <form action="" id="service" method="POST">
                                <input type="hidden" id="action" value="buff">
                                <input type="hidden" id="service_config"
                                    value='{"service_point":<?=$row['service_point']?>,"service_min_amount":<?=$row['service_min_amount']?>,"service_max_amount":<?=$row['service_max_amount']?>,"service_warranty":<?=$row['service_warranty']?>,"service_gender":<?=$row['service_gender']?>}'>
                                <input type="hidden" id="service_reaction"
                                    value='{"love":<?=$row['service_reaction_love']?>,"care":<?=$row['service_reaction_care']?>,"haha":<?=$row['service_reaction_haha']?>,"wow":<?=$row['service_reaction_wow']?>,"sad":<?=$row['service_reaction_sad']?>,"angry":<?=$row['service_reaction_angry']?>}'>
                                <input type="hidden" name="type" value="like">
                                <input type="hidden" name="category" value="facebook">
                                <div class="form-group">
                                    <label>ID / Link Facebook :</label>
                                    <input id="buff_like_facebook" type="text" class="form-control"
                                        placeholder="Nhập ID hoặc Link Facebook" autocomplete="off" required="">
                                </div>

                                <div class="form-group" style="display: none;">
                                    <label>Dịch vụ :</label>
                                    <input id="buff_like_service" type="text" class="form-control"
                                        placeholder="Nhập dịch vụ" value="<?=$row['service_slug']?>" autocomplete="off"
                                        required="">
                                </div>

                                <div class="form-group">
                                    <label>Ghi chú :</label>
                                    <textarea id="buff_like_content" rows="2" class="form-control"
                                        placeholder="Nhập ghi chú cho tiến trình hoặc bỏ trống"></textarea>
                                </div>

                                <div class="form-group">
                                    <label>Số lượng ( <?=$row['service_min_amount']?> ~
                                        <?=$row['service_max_amount']?> )
                                        :</label>
                                    <input type="number" class="form-control" name="amount" id="buff_like_amount"
                                        placeholder="Nhập số lượng cần mua" value="<?=$row['service_min_amount']?>"
                                        autofocus="">
                                </div>

                                <div class="form-group">
                                    <label>Loại :</label>
                                    <select name="price_type" id="buff_like_type" class="form-control">
                                        <option value="0">Không bảo hành - 70 VND</option>
                                        <option value="1" selected="">Bảo hành - 95 VND</option>
                                    </select>
                                </div>

                                <div class="form-group" style="display: none;">
                                    <label>Giới tính :</label>
                                    <input name="gender" id="buff_like_gender" class="form-control"
                                        placeholder="Nhập ghi chú cho tiến trình hoặc bỏ trống" value="all">
                                </div>
                                <div class="form-group">
                                    <label>Lọc giới tính ( Phí 20% ) :</label>
                                    <div class="row text-center s-gender" style="font-weight: bold;">
                                        <div class="col-lg-4 gd">
                                            <button type="button" data-gender="male"
                                                class="btn btn-default btn-sm btn-rounded waves-effect btn-block border-purple">
                                                <img src="/views/v1/images/icon/gender/male.png" alt=""
                                                    style="height: 25px;">
                                                Nam
                                            </button>
                                        </div>
                                        <div class="col-lg-4 gd">
                                            <button type="button" data-gender="female"
                                                class="btn btn-default btn-sm btn-rounded waves-effect btn-block border-purple">
                                                <img src="/views/v1/images/icon/gender/female.png" alt=""
                                                    style="height: 25px;">
                                                Nữ
                                            </button>
                                        </div>
                                        <div class="col-lg-4 gd">
                                            <button type="button" data-gender="all"
                                                class="btn btn-info btn-sm btn-rounded waves-effect btn-block">
                                                <img src="/views/v1/images/icon/gender/all.png" alt=""
                                                    style="height: 25px;">
                                                Tất cả
                                            </button>
                                        </div>
                                    </div>
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
                                                    <span class="amount" data-amount="0">0</span> Like Fanpage với giá mỗi Like Fanpage là <span class="rate"
                                                        data-rate="0">0</span> VND / <span class="name">Like Fanpage</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="buff_like_fanpage();"><i class="fa fa-plus-circle"></i>
                                        Tạo tiến trình</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php require_once 'buff_like_page_list.php'; ?>
        </div>
    </div>
</div>
<script>
function buff_like_fanpage() {
    var buff_like_facebook = $('#buff_like_facebook').val();
    var buff_like_service = $('#buff_like_service').val();
    var buff_like_content = $('#buff_like_content').val();
    var buff_like_amount = $('#buff_like_amount').val();
    var buff_like_type = $('#buff_like_type').val();
    var buff_like_gender = $('#buff_like_gender').val();
    if (!buff_like_facebook) {
        swalalert("Vui lòng nhập ID Facebook", "info");
        return;
    }
    if (!buff_like_service) {
        swalalert("Vui lòng nhập dịch vụ", "info");
        return;
    }
    if (!buff_like_content) {
        swalalert("Vui lòng nhập cảm xúc", "info");
        return;
    }
    if (!buff_like_amount) {
        swalalert("Vui lòng nhập nội dung", "info");
        return;
    }
    if (!buff_like_type) {
        swalalert("Vui lòng nhập số lượng bài viết", "info");
        return;
    }
    if (!buff_like_gender) {
        swalalert("Vui lòng nhập số lượng bài viết", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'service/buff_like_fanpage/',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'buff_like_fanpage',
            buff_like_facebook: buff_like_facebook,
            buff_like_service: buff_like_service,
            buff_like_content: buff_like_content,
            buff_like_amount: buff_like_amount,
            buff_like_type: buff_like_type,
            buff_like_gender: buff_like_gender
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