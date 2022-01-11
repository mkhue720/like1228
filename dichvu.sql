-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 22, 2021 lúc 09:09 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dichvu`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_banks`
--

CREATE TABLE `table_banks` (
  `banks_id` int(11) NOT NULL,
  `banks_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `banks_images` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `banks_account_holder` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `banks_number_holder` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `banks_branch` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `banks_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `banks_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_banks`
--

INSERT INTO `table_banks` (`banks_id`, `banks_name`, `banks_images`, `banks_account_holder`, `banks_number_holder`, `banks_branch`, `banks_status`, `banks_time`) VALUES
(1, 'false', 'https://static.mservice.io/img/logo-momo.png', 'Ly Trong Nguyen', '0907156104', 'false', 'true', '1611290637');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_buff_like`
--

CREATE TABLE `table_buff_like` (
  `buff_like_id` int(11) NOT NULL,
  `buff_like_username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_facebook_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_facebook` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_service` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_content` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_reaction` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_amount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_comment` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_type` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_gender` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_origin` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_increased` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_present` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_payment` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `buff_like_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_buff_like`
--

INSERT INTO `table_buff_like` (`buff_like_id`, `buff_like_username`, `buff_like_facebook_name`, `buff_like_facebook`, `buff_like_service`, `buff_like_content`, `buff_like_reaction`, `buff_like_amount`, `buff_like_comment`, `buff_like_type`, `buff_like_gender`, `buff_like_origin`, `buff_like_increased`, `buff_like_present`, `buff_like_payment`, `buff_like_status`, `buff_like_time`) VALUES
(1, 'kenthudoan', 'Sorry Musicc.', '528441708083357', 'buff-like-facebook', '528441708083357', 'love', '100', 'NO', '1', 'all', '7140', '23', '7163', '9500', 'running', '1611285147'),
(2, 'kenthudoan', 'Cao Thủ', '3334712856812168', 'buff-like-facebook', '3334712856812168', 'like', '10', 'NO', '1', 'all', '2257', '777', '3034', '950', 'complete', '1611285927'),
(3, 'kenthudoan', 'TOP Comments', '3410946312496813', 'buff-like-facebook', '3410946312496813', 'love', '20', 'NO', '1', 'male', '1629', '101', '1730', '2375', 'complete', '1611286482'),
(4, 'kenthudoan', 'TOP Comments', '1996236120634513', 'buff-like-fanpage-facebook', '1996236120634513', 'NO', '100', 'NO', '1', 'all', '3466408', '22', '3466430', '14000', 'running', '1611286812'),
(5, 'kenthudoan', 'Mark Zuckerberg', '4', 'buff-follows-facebook', '123', 'NO', '100', 'NO', '1', 'male', '116827932', '-7', '116827925', '25000', 'running', '1611287448'),
(6, 'kenthudoan', '?????????????????????', '117400956924675', 'buff-share-facebook', '123', 'NO', '10', 'NO', '0', 'female', '8932', '9', '8941', '14400', 'running', '1611287560');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_card`
--

CREATE TABLE `table_card` (
  `card_id` int(11) NOT NULL,
  `card_username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_code` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_type` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_amount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_serial` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_pin` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_origin` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_content` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `card_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_card`
--

INSERT INTO `table_card` (`card_id`, `card_username`, `card_code`, `card_type`, `card_amount`, `card_serial`, `card_pin`, `card_origin`, `card_content`, `card_status`, `card_time`) VALUES
(1, 'kenthudoan', 'dEsmRf6pAH2x', 'Vinaphone', '30000', '12326668898213', '12326668898213', '21900', 'Gửi thẻ thành công, vui lòng đợi kết quả', 'progress', '1611301239');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_history_account`
--

CREATE TABLE `table_history_account` (
  `history_account_id` int(11) NOT NULL,
  `history_account_username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `history_account_content` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_account_ip` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_account_useragent` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_account_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_history_buy`
--

CREATE TABLE `table_history_buy` (
  `history_buy_id` int(11) NOT NULL,
  `history_buy_username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `history_buy_content` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_buy_point` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_buy_balance` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_buy_ip` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `history_buy_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_momo`
--

CREATE TABLE `table_momo` (
  `momo_id` int(11) NOT NULL,
  `momo_username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_request_id` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_tran_id` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_partner_id` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_partner_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_amount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_content` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `momo_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_service`
--

CREATE TABLE `table_service` (
  `service_id` int(11) NOT NULL,
  `service_title` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_slug` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_category` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_content` text COLLATE utf8_unicode_ci NOT NULL,
  `service_point` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_min_amount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_max_amount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_warranty` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_gender` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_reaction_love` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_reaction_care` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_reaction_haha` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_reaction_wow` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_reaction_sad` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_reaction_angry` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `service_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_service`
--

INSERT INTO `table_service` (`service_id`, `service_title`, `service_slug`, `service_category`, `service_content`, `service_point`, `service_min_amount`, `service_max_amount`, `service_warranty`, `service_gender`, `service_reaction_love`, `service_reaction_care`, `service_reaction_haha`, `service_reaction_wow`, `service_reaction_sad`, `service_reaction_angry`, `service_status`, `service_time`) VALUES
(1, 'Vip Like Avatar Facebook', 'vip-like-avatar-facebook', 'facebook', '<p>- L&uacute;c nhanh v&agrave; chậm t&ugrave;y biến do Facebook, tốc độ phụ thuộc khi mua v&agrave; kh&ocirc;ng thể cập nhật l&uacute;c đ&atilde; mua xong!<br />\n- Đăng b&agrave;i xong đợi Like chạy đủ rồi đăng tiếp, đăng li&ecirc;n tục sẽ kh&ocirc;ng l&ecirc;n Like tất cả b&agrave;i viết<br />\n- Like chỉ chạy b&agrave;i đầu ti&ecirc;n tr&ecirc;n trang c&aacute; nh&acirc;n<br />\n- Giới hạn 5 - 7 b&agrave;i ng&agrave;y ( Nếu bị Facebook qu&eacute;t ) v&agrave; kh&ocirc;ng giới hạn nếu như Facebook kh&ocirc;ng c&oacute; t&igrave;nh trạng kh&oacute; xử n&agrave;o!</p>\n', '500', '100', '10000', '95', '25', '35', '35', '40', '30', '50', '100', 'true', '2021-01-13 21:39:49'),
(2, 'Buff Like Facebook', 'buff-like-facebook', 'facebook', 'Bài viết luôn luôn ở chế độ Công khai, đối với Page đang ở chế độ Tùy chỉnh thì cũng chuyển sang Công khai!', '70', '10', '500000', '95', '25', '35', '35', '40', '30', '50', '100', 'true', '2021-01-13 21:45:58'),
(3, 'Vip Like Clone Facebook', 'vip-like-clone-facebook', 'facebook', '<p>- L&uacute;c nhanh v&agrave; chậm t&ugrave;y biến do Facebook, tốc độ phụ thuộc khi mua v&agrave; kh&ocirc;ng thể cập nhật l&uacute;c đ&atilde; mua xong!<br />\n- Đăng b&agrave;i xong đợi Like chạy đủ rồi đăng tiếp, đăng li&ecirc;n tục sẽ kh&ocirc;ng l&ecirc;n Like tất cả b&agrave;i viết<br />\n- Like chỉ chạy b&agrave;i đầu ti&ecirc;n tr&ecirc;n trang c&aacute; nh&acirc;n<br />\n- Giới hạn 5 - 7 b&agrave;i ng&agrave;y ( Nếu bị Facebook qu&eacute;t ) v&agrave; kh&ocirc;ng giới hạn nếu như Facebook kh&ocirc;ng c&oacute; t&igrave;nh trạng kh&oacute; xử n&agrave;o!</p>\n', '140', '100', '10000', '0', '0', '0', '0', '0', '0', '0', '0', 'true', '2021-01-16 09:20:59'),
(4, 'Buff Share Facebook', 'buff-share-facebook', 'facebook', 'Bài viết luôn luôn ở chế độ Công khai, đối với Page đang ở chế độ Tùy chỉnh thì cũng chuyển sang Công khai!', '1200', '5', '20000', '1700', '20', '0', '0', '0', '0', '0', '0', 'true', '2021-01-16 16:25:40'),
(5, 'Buff Comment Facebook', 'buff-comment-facebook', 'facebook', 'Bài viết luôn luôn ở chế độ Công khai, đối với Page đang ở chế độ Tùy chỉnh thì cũng chuyển sang Công khai!', '650', '5', '1000', '850', '30', '0', '0', '0', '0', '0', '0', 'true', '2021-01-16 21:49:54'),
(6, 'Buff Follows Facebook', 'buff-follows-facebook', 'facebook', 'Bài viết luôn luôn ở chế độ Công khai, đối với Page đang ở chế độ Tùy chỉnh thì cũng chuyển sang Công khai!', '120', '100', '30000', '125', '100', '0', '0', '0', '0', '0', '0', 'true', '2021-01-16 22:56:15'),
(7, 'Buff Like Fanpage Facebook', 'buff-like-fanpage-facebook', 'facebook', '<p>- B&agrave;i viết lu&ocirc;n lu&ocirc;n ở chế độ C&ocirc;ng khai, đối với Page đang ở chế độ T&ugrave;y chỉnh th&igrave; cũng chuyển sang C&ocirc;ng khai!<br />\n- Mua loại bảo h&agrave;nh để được tăng dư ra ngẫu nhi&ecirc;n từ 5 - 10% v&agrave; được bảo h&agrave;nh trong 1 tuần nếu tụt từ 30% số lượng đ&atilde; mua!<br />\n- Quy định bảo h&agrave;nh l&agrave; nếu số lượng Like/CMT/Sub hiện tại thấp hơn số lượng Like/CMT/Sub ho&agrave;n th&agrave;nh th&igrave; sẽ được b&ugrave; trong tuần!<br />\n- Tự động chặn ID khi th&ecirc;m tối đa 10 ID giống nhau dẫn đến SPAM tr&ecirc;n mỗi dịch vụ<br />\n- Tất cả đều l&agrave; người d&ugrave;ng việt 100% c&oacute; thể kiểm tra khi tăng</p>\n', '130', '100', '30000', '140', '100', '0', '0', '0', '0', '0', '0', 'true', '2021-01-17 18:18:51'),
(10, 'Vip Like Fast Facebook', 'vip-like-fast-facebook', 'facebook', '<p>- VIP Like Nhanh l&agrave; loại Like c&oacute; Avatar, Th&ocirc;ng tin, Bạn B&egrave; đầy đủ gần giống như nick thật, tốc độ phụ thuộc khi mua v&agrave; kh&ocirc;ng thể cập nhật l&uacute;c đ&atilde; mua xong!<br />\n- Like chạy si&ecirc;u nhanh từ 3 - 7 ph&uacute;t sẽ đủ Like<br />\n- Loại Like n&agrave;y c&oacute; tụt nhưng kh&ocirc;ng đ&aacute;ng kể<br />\n- Đăng b&agrave;i xong đợi Like chạy đủ rồi đăng tiếp, đăng li&ecirc;n tục sẽ kh&ocirc;ng l&ecirc;n Like tất cả b&agrave;i viết<br />\n- Like chỉ chạy b&agrave;i đầu ti&ecirc;n tr&ecirc;n trang c&aacute; nh&acirc;n<br />\n- Giới hạn 5 - 7 b&agrave;i ng&agrave;y ( Nếu bị Facebook qu&eacute;t ) v&agrave; kh&ocirc;ng giới hạn nếu như Facebook kh&ocirc;ng c&oacute; t&igrave;nh trạng kh&oacute; xử n&agrave;o!</p>\n', '400', '50', '10000', '0', '0', '0', '0', '0', '0', '0', '0', 'true', '1611144563');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_settings`
--

CREATE TABLE `table_settings` (
  `settings_id` int(11) NOT NULL,
  `settings_title` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_logo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_keyword` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_domain` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_card24h` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_discount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_facebook` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_fanpage` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_noti` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `settings_mail_account` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_mail_password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_token` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `settings_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_settings`
--

INSERT INTO `table_settings` (`settings_id`, `settings_title`, `settings_logo`, `settings_name`, `settings_keyword`, `settings_domain`, `settings_card24h`, `settings_discount`, `settings_facebook`, `settings_fanpage`, `settings_noti`, `settings_mail_account`, `settings_mail_password`, `settings_token`, `settings_status`) VALUES
(1, 'Hỗ Trợ Seending Facebook, Instagram, Tiktok', '/views/v1/images/icon/service/facebook.png', 'SIEULIKE • COM', 'SieuLike.Com là hệ thống mua bán các dịch vụ mạng xã hội uy tín và chất lượng tại thị trường Việt Nam', 'http://localhost/', '5mqsGJhzNQ9keYuyrFIOo0Ml', '27', '100013034588090', 'https://www.facebook.com/deeptryhi/', '<p><br />\n<strong>Ch&agrave;o Mừng Bạn Đến Với LIKEVIET Nếu Gặp Vấn Đề G&igrave; Th&igrave; H&atilde;y Li&ecirc;n Hệ Ngay Với Admin Qua<br />\n↪ SMS : 0354186573<br />\n↪ Facebook:fb.com/duog.trumtruong<br />\n↪ Tuyển CTV hỗ trợ tạo site con.<br />\n@Tr&acirc;n Trọng<br />\nAdmin<br />\n●▬▬▬▬๑۩۩๑▬▬▬▬▬●</strong></p>\n', 'vietthongblogger@gmail.com', '012312323123123', 'EAAAAZAw4FxQIBAPWRel23F3l032fSeGuLFC1OdQFjuivUWZBGgbsBNkTyFTOItEre2US2yRtHpPxcdjrYegvgKpmvg4xLvDMCaSW8ddrcvKmrQhBhOICN48D6W7OJxaKgXuln7gJcA01PlxYZBrBIHs1cZCqsD3TaNpwLbGqXwZDZD', 'true');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_user`
--

CREATE TABLE `table_user` (
  `user_id` int(11) NOT NULL,
  `user_username` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_fullname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_email` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_phone` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_point` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_facebook` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_location` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_ip` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_level` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_blocked` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_time_last` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `user_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_user`
--

INSERT INTO `table_user` (`user_id`, `user_username`, `user_password`, `user_fullname`, `user_email`, `user_phone`, `user_point`, `user_facebook`, `user_location`, `user_ip`, `user_level`, `user_blocked`, `user_time_last`, `user_time`) VALUES
(1, 'kenthudoan', '81938f16a0a32f3acbf213def0cb82ce', 'Bùi Xuân Đức', 'tankhoacl@gmail.com', '0942416825', '103170', '100013034588090', '', '::1', '4', '0', '1611144316', '0000-00-00 00:00:00'),
(4, 'kenthudoan4', '81938f16a0a32f3acbf213def0cb82ce', 'TranVan', 'kenthudoan@gmail.com', '09424168252', '100', '4', '', '::1', '3', '0', '2021-01-15 21:53:14', '2021-01-15 21:53:14'),
(5, 'toineban', 'acd9751c28d5cc02188df4bd9d2706ad', 'Tôi nè bạn', 'toineban@gmail.com', '0919773446', '100', '4', '', '::1', '1', '0', '2021-01-19 18:32:18', '2021-01-19 18:32:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_vip_like`
--

CREATE TABLE `table_vip_like` (
  `vip_like_id` int(11) NOT NULL,
  `vip_like_username` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_facebook_name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_facebook` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_service` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_content` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_speed` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_reaction` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_amount` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_amount_post` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_expires` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_status` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `vip_like_time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_vip_like`
--

INSERT INTO `table_vip_like` (`vip_like_id`, `vip_like_username`, `vip_like_facebook_name`, `vip_like_facebook`, `vip_like_service`, `vip_like_content`, `vip_like_speed`, `vip_like_reaction`, `vip_like_amount`, `vip_like_amount_post`, `vip_like_expires`, `vip_like_status`, `vip_like_time`) VALUES
(1, 'kenthudoan', 'Bùi Xuân Đức­ ', '100013034588090', 'vip-like-clone-facebook', '123', '10', 'like', '100', '5', '1624008078', 'progress', '1611163278'),
(2, 'kenthudoan', 'Lan Ngoc', '100046550079237', 'vip-like-fast-facebook', '100046550079237', '10', 'like', '50', '5', '1613784195', 'progress', '1611220995'),
(3, 'kenthudoan', 'Tiến Đạt', '100009910934598', 'vip-like-avatar-facebook', '100009910934598', '10', 'like', '120', '5', '1613784259', 'complete', '1611221059');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `table_banks`
--
ALTER TABLE `table_banks`
  ADD PRIMARY KEY (`banks_id`),
  ADD KEY `banks_number_holder` (`banks_number_holder`);

--
-- Chỉ mục cho bảng `table_buff_like`
--
ALTER TABLE `table_buff_like`
  ADD PRIMARY KEY (`buff_like_id`),
  ADD KEY `buff_like_username` (`buff_like_username`);

--
-- Chỉ mục cho bảng `table_card`
--
ALTER TABLE `table_card`
  ADD PRIMARY KEY (`card_id`),
  ADD KEY `card_username` (`card_username`);

--
-- Chỉ mục cho bảng `table_history_account`
--
ALTER TABLE `table_history_account`
  ADD PRIMARY KEY (`history_account_id`),
  ADD KEY `history_account_username` (`history_account_username`);

--
-- Chỉ mục cho bảng `table_history_buy`
--
ALTER TABLE `table_history_buy`
  ADD PRIMARY KEY (`history_buy_id`),
  ADD KEY `history_buy_username` (`history_buy_username`);

--
-- Chỉ mục cho bảng `table_momo`
--
ALTER TABLE `table_momo`
  ADD PRIMARY KEY (`momo_id`),
  ADD KEY `momo_username` (`momo_username`);

--
-- Chỉ mục cho bảng `table_service`
--
ALTER TABLE `table_service`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `service_slug` (`service_slug`);

--
-- Chỉ mục cho bảng `table_settings`
--
ALTER TABLE `table_settings`
  ADD PRIMARY KEY (`settings_id`);

--
-- Chỉ mục cho bảng `table_user`
--
ALTER TABLE `table_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_username` (`user_username`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD UNIQUE KEY `user_phone` (`user_phone`);

--
-- Chỉ mục cho bảng `table_vip_like`
--
ALTER TABLE `table_vip_like`
  ADD PRIMARY KEY (`vip_like_id`),
  ADD KEY `vip_like_username` (`vip_like_username`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `table_banks`
--
ALTER TABLE `table_banks`
  MODIFY `banks_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `table_buff_like`
--
ALTER TABLE `table_buff_like`
  MODIFY `buff_like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `table_card`
--
ALTER TABLE `table_card`
  MODIFY `card_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `table_history_account`
--
ALTER TABLE `table_history_account`
  MODIFY `history_account_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `table_history_buy`
--
ALTER TABLE `table_history_buy`
  MODIFY `history_buy_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `table_momo`
--
ALTER TABLE `table_momo`
  MODIFY `momo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `table_service`
--
ALTER TABLE `table_service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `table_settings`
--
ALTER TABLE `table_settings`
  MODIFY `settings_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `table_user`
--
ALTER TABLE `table_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `table_vip_like`
--
ALTER TABLE `table_vip_like`
  MODIFY `vip_like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
