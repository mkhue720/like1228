<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="header-title p7">Danh Sách <?=$row['service_title']?></h4>

                <div class="table-responsive">
                    <table class="dataTable text-center table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Họ tên</th>
                                <th>ID</th>
                                <th>Cảm xúc</th>
                                <th>Số lượng</th>
                                <th>Bảo hành</th>
                                <th>Giới tính</th>
                                <th>Ban đầu</th>
                                <th>Đã chạy</th>
                                <th>Hiện tại</th>
                                <th>Trạng thái</th>
                                <th>Tổng thanh toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                            $result = mysqli_query($conn,"SELECT * FROM table_buff_like WHERE buff_like_username = '$user_username' AND buff_like_service = 'buff-like-facebook' ORDER BY buff_like_id DESC LIMIT 0,15");
                            while($row = mysqli_fetch_assoc($result)){
                                if ($row['buff_like_status'] == 'progress') {
                                    $buff_like_status = '<font color="gray" style="font-weight: bold">Chờ duyệt</font>';
                                }else if ($row['buff_like_status'] == 'running') {
                                    $buff_like_status = '<font color="violet" style="font-weight: bold">Đang chạy</font>';
                                }else if ($row['buff_like_status'] == 'complete') {
                                    $buff_like_status = '<font color="green" style="font-weight: bold">Hoàn thành</font>';
                                }else if ($row['buff_like_status'] == 'blocked') {
                                    $buff_like_status = '<font color="red" style="font-weight: bold">Bị khóa</font>';
                                }

                                if ($row['buff_like_type'] == '1') {
                                    $buff_like_type = 'Có';
                                }else if ($row['buff_like_type'] == '0') {
                                    $buff_like_type = 'Không';
                                }
                            ?>
                            <tr>
                                <td><?=$row['buff_like_id'];?></td>
                                <td><a href="http://fb.com/<?=$row['buff_like_facebook'];?>" target="_blank"><?=$row['buff_like_facebook_name'];?></a></td>
                                <td><?=$row['buff_like_facebook'];?></td>
                                <td><?=ucfirst($row['buff_like_reaction']);?></td>
                                <td><?=number_format($row['buff_like_amount']);?></td>
                                <td><?=$buff_like_type;?></td>
                                <td><?=ucfirst($row['buff_like_gender']);?></td>
                                <td><?=number_format($row['buff_like_origin']);?></td>
                                <td><?=number_format($row['buff_like_increased']);?></td>
                                <td><?=number_format($row['buff_like_present']);?></td>
                                <td><?=$buff_like_status;?></td>
                                <td><?=number_format($row['buff_like_payment']);?> VND</td>
                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>