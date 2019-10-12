jQuery(document).ready(function() {
        const NUMBER_SLIDES_DESCTOP=3;
        const NUMBER_SLIDES_LAPTOP=2;
        const NUMBER_SLIDES_MOBILE=1;
        const widthScreen = screen.width;
        
        const arrSlider = ['How to Prevent Unintentional Plagiarism 1', 'Study Abroad Stress: The Complete Guide for International Students 2', 'Good GPA—Why Do You Need It & How To Improve It 3', 'How to Prevent Unintentional Plagiarism 4', 'Study Abroad Stress: The Complete Guide for International Students 5', 'Good GPA—Why Do You Need It & How To Improve It 6','How to Prevent Unintentional Plagiarism 7', 'Study Abroad Stress: The Complete Guide for International Students 8', 'Good GPA—Why Do You Need It & How To Improve It 9', 'How to Prevent Unintentional Plagiarism 10', 'Study Abroad Stress: The Complete Guide for International Students 11', 'Good GPA—Why Do You Need It & How To Improve It 12', 'How to Prevent Unintentional Plagiarism 13', 'Study Abroad Stress: The Complete Guide for International Students 14', 'Good GPA—Why Do You Need It & How To Improve It 15', 'Good GPA—Why Do You Need It & How To Improve It 16'];
        const arrBackground = ['background: url("/template/img/pattern.png") #5ECABF;', 'background: url("/template/img/pattern_2.png") #009688;', 'background: url("/template/img/pattern_3.png") #EE7E4A;', 'background: url("/template/img/pattern.png") #5ECABF;', 'background: url("/template/img/pattern_2.png") #009688;', 'background: url("/template/img/pattern_3.png") #EE7E4A;', 'background: url("/template/img/pattern.png") #5ECABF;', 'background: url("/template/img/pattern_2.png") #009688;', 'background: url("/template/img/pattern_3.png") #EE7E4A;', 'background: url("/template/img/pattern.png") #5ECABF;', 'background: url("/template/img/pattern_2.png") #009688;', 'background: url("/template/img/pattern_3.png") #EE7E4A;', 'background: url("/template/img/pattern.png") #5ECABF;', 'background: url("/template/img/pattern_2.png") #009688;', 'background: url("/template/img/pattern_3.png") #EE7E4A;', 'background: url("/template/img/pattern.png") #5ECABF;']
        
        createSliderCod();
        function createSliderCod(){
            let strCod = '<div class="slider"><div class="slider_slick">';
            if( widthScreen>319 && widthScreen<768 ){ createMobileCod(); } 
            else if( widthScreen>767 && widthScreen<1199 ) { createLaptopCod(); } 
            else { createDesctopCod(); }   
        }
       
        function createDesctopCod(){
            let strCod='';
            strCod += '<div class="slider"><div class="slider_slick">';
            for(let i=0; i<arrSlider.length/2; i++){
                strCod+=`<div class="slider_item">
                <div class="slider_card" style='${arrBackground[i]}'>
                    <div class="slider_item_desc">
                        <div class="slider_item_mask"></div>
                        <p>${arrSlider[i]}<p>
                    </div>
                </div>
            </div>`;
            }
            strCod+='</div></div>';
            strCod += '<div class="slider"><div class="slider_slick">';
            for(let i=Math.ceil(arrSlider.length/2); i<arrSlider.length; i++){
                strCod+=`<div class="slider_item">
                <div class="slider_card" style='${arrBackground[i]}'>
                    <div class="slider_item_desc">
                        <div class="slider_item_mask"></div>
                        <p>${arrSlider[i]}<p>
                    </div>
                </div>
            </div>`;
            }
            strCod+='</div></div>';
            jQuery(".slider_place").html(strCod);
            initialBullet();
            $('.slider_slick').slick({
                infinite: true,
                slidesToShow: NUMBER_SLIDES_DESCTOP,
                slidesToScroll: 1,
                dots: true,
              });
        }
        function createLaptopCod(){
            let strCod='';
            strCod += '<div class="slider"><div class="slider_slick">';
            for(let i=0; i<arrSlider.length/2; i++){
                strCod+=`<div class="slider_item">
                <div class="slider_card" style='${arrBackground[i]}'>
                    <div class="slider_item_desc">
                        <div class="slider_item_mask"></div>
                        <p>${arrSlider[i]}<p>
                    </div>
                </div>
            </div>`;
            }
            strCod+='</div></div>';
            strCod += '<div class="slider"><div class="slider_slick">';
            for(let i=Math.ceil(arrSlider.length/2); i<arrSlider.length; i++){
                strCod+=`<div class="slider_item">
                <div class="slider_card" style='${arrBackground[i]}'>
                    <div class="slider_item_desc">
                        <div class="slider_item_mask"></div>
                        <p>${arrSlider[i]}<p>
                    </div>
                </div>
            </div>`;
            }
            strCod+='</div></div>';
            jQuery(".slider_place").html(strCod);
            initialBullet();
            $('.slider_slick').slick({
                infinite: true,
                slidesToShow: NUMBER_SLIDES_LAPTOP,
                slidesToScroll: 1,
                dots: true,
              });
        }
        function createMobileCod(){
           let strCod='';
            strCod += '<div class="slider"><div class="slider_slick">';
            for(let i=0; i<arrSlider.length; i++){
                strCod+=`<div class="slider_item">
                <div class="slider_card" style='${arrBackground[i]}'>
                    <div class="slider_item_desc">
                        <div class="slider_item_mask"></div>
                        <p>${arrSlider[i]}<p>
                    </div>
                </div>
            </div>`;
            }
            strCod+='</div></div>';
            jQuery(".slider_place").html(strCod);
            initialBullet();
            $('.slider_slick').slick({
                infinite: true,
                slidesToShow: NUMBER_SLIDES_MOBILE,
                slidesToScroll: 1,
                dots: true,
              });
        }
        function initialBullet() {
            let strCod='';
            if( widthScreen>319 && widthScreen<768 ){ 
                for(let i=0; i<arrSlider.length; i++) {
                    strCod+=`<li class="slider_bullet" data-id="${i}"></li>`;
                }
            } 
            else if( widthScreen>767 && widthScreen<1199 ) {
                for(let i=0; i<Math.ceil(arrSlider.length/2); i++) {
                    strCod+=`<li class="slider_bullet" data-id="${i}"></li>`;
                }
            } 
            else { 
                for(let i=0; i<Math.ceil(arrSlider.length/2); i++) {
                    strCod+=`<li class="slider_bullet" data-id="${i}"></li>`;
                }
             }  
            jQuery(".slider_buller_ul").html(strCod);
        }
        
    jQuery(".slider_next_mm").click(()=>{
            jQuery(".slick-next").click();
            jQuery("#slick-slide-control01").click(); 
          });
        jQuery(".slider_prev_mm").click(()=>{
            jQuery(".slick-prev").click(); 
          });
        jQuery(".slider_bullet").click(function() {
            jQuery(`#slick-slide-control0${jQuery(this).data("id")}`).click();
            jQuery(`#slick-slide-control1${jQuery(this).data("id")}`).click();  
        });
  });
  
