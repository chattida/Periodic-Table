<?php
    // json-1
    $json_file = file_get_contents('./data/elements_th.json');
    $json_data = json_decode($json_file, true);
    // json-2
    $json_file1 = file_get_contents('./data/data_th.json');
    $json_data1 = json_decode($json_file1, true);
    $id = (int) $_GET['id'] - 1;
    $id_ = $id + 1;
    if ($id_ > 118 || $id_ < 1) {
        redirect("../../index.php");
    }

    function redirect($url) {
        ob_start();
        while (ob_get_status()) {
            ob_end_clean();
        }
        header( "Location: $url" );
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo($json_data[$id]['Element'] . " | ตารางธาตุ"); ?></title>
    <link rel="icon" href="../assets/logo/logo.png" type="image/png">
    <!-- ios -->
    <meta name="apple-mobile-web-app-title" content="<?php echo($json_data[$id]['Element'] . " | ตารางธาตุ"); ?>">
    <link rel="apple-touch-icon" href="../assets/logo/logo.png">
    <!-- css -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/fontawesome.min.css">
    <link rel="stylesheet" href="../css/solid.min.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <!-- navbar -->
    <nav class="navbar navbar-light bg-light navbar-expand-lg pr-2">
        <a class="navbar-brand" href="index.php">
            <img src="../assets/logo/logo.png" width="30" height="30" alt="โลโก้เว็บไซต์ ตารางธาตุ" class="mr-1">
            ตารางธาตุ
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.php">หน้าหลัก</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="list.php">ธาตุ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="developer.php">ผู้พัฒนา</a>
                </li>
            </ul>
            <!-- search -->
            <form class="form-inline" action="/search.php" method="POST">
                <div class="input-group">
                    <input class="form-control" type="search" placeholder="ค้นหา" aria-label="Search" name="msg">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="submit"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            <!-- language -->
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ml-1" href="#" id="dropdownLanguage" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-globe-americas"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="dropdownLanguage">
                        <a class="dropdown-item" <?php echo("href=\"./php/change.php?lang=en&path=data&id={$id_}\"") ?>><span
                                class="flag-icon flag-icon-us mr-2"></span>อังกฤษ</a>
                        <a class="dropdown-item" <?php echo("href=\"./php/change.php?lang=th&path=data&id={$id_}\"") ?>><span
                                class="flag-icon flag-icon-th mr-2"></span>ไทย<i
                                class="fas fa-check text-success ml-1"></i></a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <!-- content -->
    <div class="container">
        <div class="text-center p-3 my-5 mx-auto topic"><h3><?php echo("{$json_data[$id]['Element']}")?></h3></div>
        <div class="row">
            <div class="col-4 text-center ml-auto">
                <img class="dataimages" src="assets/element/e<?php
                    $picname = '' . $id_;
                    if (strlen($picname) == 1) {
                        $picname = '00' . $id_;
                    } else if (strlen($picname) == 2) {
                        $picname = '0' . $id_;
                    } else if (strlen($picname) == 3) {
                        $picname = $id_;
                    }
                    echo("{$picname}");
                ?>.png" alt="<?php echo("{$json_data[$id]['Element']}")?>">
            </div>
            <div class="col-4 mr-auto">
                    <table class="table table-bordered mr-auto">
                        <tr>
                            <td>เลขอะตอม</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['AtomicNumber']}")?></td>
                        </tr>
                        <tr>
                            <td>ธาตุ</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['Element']}")?></td>
                        </tr>
                        <tr>
                            <td>สัญลักษณ์</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['Symbol']}")?></td>
                        </tr>
                        <tr>
                            <td>จำนวนนิวตรอน</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['NumberofNeutrons']}")?></td>
                        </tr>
                        <tr>
                            <td>จำนวนโปรตรอน</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['NumberofProtons']}")?></td>
                        </tr>
                        <tr>
                            <td>จำนวนอิเล็กตรอน</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['NumberofElectrons']}")?></td>
                        </tr>
                        <tr>
                            <td>สถานะ</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['Phase']}")?></td>
                        </tr>
                        <tr>
                            <td>ชนิด</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['Type']}")?></td>
                        </tr>
                        <tr>
                            <td>ค้นพบโดย</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['Discoverer']}")?></td>
                        </tr>
                        <tr>
                            <td>ปีที่ค้นพบ</td>
                            <td class="text-center"><?php echo("{$json_data[$id]['Year']}")?></td>
                        </tr>
                        
                    </table>
            </div>
        </div>
        <div class="my-5 mx-auto" style="width:70%;">
            <?php
                foreach($json_data1[$id]['Description'] as $data) {
                    echo("<p>&emsp;&emsp;&emsp;&emsp;{$data}</p>");
                }
            ?>
        </div>
        <div class="row my-5">
            <div class="col-5 p-3 mx-auto history">
            <?php
                echo("<b>ประวัติการค้นพบ</b>");
                foreach($json_data1[$id]['Discovery'] as $data) {
                    echo("<p>&emsp;&emsp;&emsp;&emsp;{$data}</p>");
                }
            ?>
            </div>
            <div class="col-5 p-3 mx-auto benefit">
            <?php
                echo("<b>ประโยชน์</b>");
                $i = 1;
                try {
                    foreach($json_data1[$id]['Benefit_extra'] as $data) {
                        if ($data != "") {
                            echo("<p>&emsp;&emsp;{$data}</p>");
                        }
                    }
                } catch (Exception $e){
                    } 
                foreach($json_data1[$id]['Benefit'] as $data) {
                    echo("<p>&emsp;&emsp;- {$data}</p>");
                    $i++;
                }
                echo("</div>");
            ?>
            </div>
        </div>
        <!-- footer -->
        <hr>
        <p class="text-center text-dark"><i class="fas fa-flask"></i> Periodic-Table | Web Technology Project (2019)</p>
    </div>

    <!-- script -->
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/fontawesome.min.js"></script>
    <script src="../js/solid.min.js"></script>
</body>

</html>