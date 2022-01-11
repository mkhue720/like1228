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
                                Nạp thẻ trực tiếp
                            </h4>
                            <form action="" method="POST">
                                <div class="form-group">
                                    <label>Chọn loại thẻ:</label>
                                    <select id="card_type" class="form-control">
                                        <option value="">Chọn loại thẻ *</option>
                                        <option value="Viettel">Viettel</option>
                                        <option value="Vinaphone">Vinaphone</option>
                                        <option value="Mobifone">Mobifone</option>
                                        <option value="Zing">Zing</option>
                                        <option value="Vietnamobile">Vietnamobile</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Chọn mệnh giá:</label>
                                    <select id="card_amount" class="form-control">
                                        <option value="">Chọn mệnh giá *</option>
                                        <option value="10000">10.000</option>
                                        <option value="20000">20.000</option>
                                        <option value="30000">30.000</option>
                                        <option value="50000">50.000</option>
                                        <option value="100000">100.000</option>
                                        <option value="200000">200.000</option>
                                        <option value="300000">300.000</option>
                                        <option value="500000">500.000</option>
                                        <option value="1000000">1.000.000</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Số seri:</label>
                                    <input id="card_serial" type="number" class="form-control"
                                        placeholder="Nhập tên tài khoản." autocomplete="off" required="">
                                </div>
                                <div class="form-group">
                                    <label>Mã thẻ:</label>
                                    <input id="card_pin" type="number" class="form-control"
                                        placeholder="Nhập tên tài khoản." autocomplete="off" required="">
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card box-static bg-main">
                                            <div class="card-body">
                                                <span class="text">THỰC NHẬN</span> <br>
                                                <span class="number total_price" id="result">0</span>
                                                <span class="number">VND</span> <br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="recharge_card();"><i class="fa fa-plus-circle"></i>
                                        Thực hiện</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php require_once 'pages_recharge_card_list.php'; ?>
        </div>
    </div>
</div>
<script type="text/javascript">
$('#card_amount').on('change', function() {
    var card_amount = $('#card_amount').val();
    var discount = <?=$settings_discount;?>;
    var result = card_amount - card_amount * discount / 100;
    $('#result').html(result.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,'));


});
</script>
<script>
function recharge_card() {
    var card_type = $('#card_type').val();
    var card_amount = $('#card_amount').val();
    var card_serial = $('#card_serial').val();
    var card_pin = $('#card_pin').val();
    if (!card_type) {
        swalalert("Vui lòng chọn loại thẻ.", "info");
        return;
    }
    if (!card_amount) {
        swalalert("Vui lòng chọn mệnh giá.", "info");
        return;
    }
    if (!card_serial) {
        swalalert("Vui lòng nhập số seri.", "info");
        return;
    }
    if (!card_pin) {
        swalalert("Vui lòng nhập mã thẻ.", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'modun_recharge_ajax.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'recharge_card',
            card_type: card_type,
            card_amount: card_amount,
            card_serial: card_serial,
            card_pin: card_pin
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