<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title"><i class="fa fa-dollar-sign"></i> Bảng giá dịch vụ</h4>
                            <br>
                            <div class="table-responsive">
                                <table class="text-center table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Icon</th>
                                            <th>Dịch vụ</th>
                                            <th>Giá ( - 0% )</th>
                                            <th>Giá CTV ( - 4% ) </th>
                                            <th>Giá Đại Lý ( - 5% )</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'vip-like-clone-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/vip_like_clone.png"
                                                    alt="" height="27">
                                            </td>
                                            <td>VIP Like Clone Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'vip-like-avatar-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/vip_like_avatar.png"
                                                    alt="" height="27">
                                            </td>
                                            <td>VIP Like Avatar Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'vip-like-fast-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/vip_like_fast.png"
                                                    alt="" height="27">
                                            </td>
                                            <td>VIP Like Nhanh Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'buff-like-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/like.png" alt=""
                                                    height="27">
                                            </td>
                                            <td>Buff Like Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'buff-comment-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/cmt.png" alt=""
                                                    height="27">
                                            </td>
                                            <td>Buff Bình Luận Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'buff-share-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/share.png" alt=""
                                                    height="27">
                                            </td>
                                            <td>Buff Chia Sẻ Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'buff-share-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/sub.png" alt=""
                                                    height="27">
                                            </td>
                                            <td>Buff Theo Dõi Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'buff-review-fanpage-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/review_fanpage.png"
                                                    alt="" height="27">
                                            </td>
                                            <td>Buff Review Fanpage Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                        <?php
                                        $result = mysqli_query($conn, "SELECT service_point FROM table_service WHERE service_slug = 'buff-like-fanpage-facebook' ORDER BY service_id ASC");
                                        while ($row = mysqli_fetch_assoc($result)) {
                                            $member = $row['service_point'];
                                            $collaborators = $row['service_point'] - $row['service_point'] * 5 / 100;
                                            $agency = $row['service_point'] - $row['service_point'] * 10 / 100;
                                        ?>
                                        <tr>
                                            <td>
                                                <img src="/views/v1/images/icon/service/facebook/like_fanpage.png"
                                                    alt="" height="27">
                                            </td>
                                            <td>Buff Like Fanpage Facebook</td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-info btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($member) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-danger btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($collaborators) . ' VND'; ?></button>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    class="btn btn-success btn-sm btn-rounded waves-effect"
                                                    style="height: 30px;width: 100px;"><?php echo number_format($agency) . ' VND'; ?></button>
                                            </td>
                                        </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>