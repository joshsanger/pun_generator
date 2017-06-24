<?php require_once('./_includes/config.php');?>
<?php require_once('./_includes/header.php');?>


<section class="top-banner">
    <div class="container">
        <div class="flex-wrapper center between">
            <div class="text">
                <a href="http://joshuasanger.ca/" target="_blank">
                    <img src="<?php echo BASE_URL;?>/_assets/images/logo.svg" alt="">
                </a>
                <div>
                    <span>Shopify's very own</span>
                    <h1>Pun Generator</h1>
                </div>
            </div>
            <div class="button generate">
                <i class="material-icons">&#xE5D5;</i>
                <span>Generate another!</span>
            </div> <!-- /generate -->
        </div> <!-- /flex-wrapper -->

    </div> <!-- /container -->
</section> <!-- /top-banner -->
<section class="content white-background">
    <div class="container">
        <div class="pun-wrap">
            <div class="pun-content">
                <div class="topic">
                    <p>Topic: <span class="pun--topic">Work</span></p>
                </div> <!-- /topic -->
                <div class="pun">
                    <i class="material-icons">&#xE815;</i>
                    <p class="pun--pun">I can't believe I got fired from the calendar factory. All I did was take a day off!</p>
                </div>

            </div> <!-- /content -->
            <div class="fetching">

            </div> <!-- /fetching -->
        </div>
    </div>
</section>
<section class="content">
    <div class="container">
        <p class="center-text secondary-text">
            Much to my wife's dismay, I absolutely love puns! So much so, that I've created this little generator for you.<br/>
            Hope you enjoy!
        </p>
    </div> <!-- /container -->
</section>

<?php require_once('./_includes/footer.php');?>