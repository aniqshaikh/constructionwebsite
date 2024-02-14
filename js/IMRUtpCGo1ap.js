/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/public/dev/activityTabLoadmore.js":
/*!**************************************************!*\
  !*** ./assets/public/dev/activityTabLoadmore.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function activityTabLoadmore() {\n    const single_campaign_activites = $(\"#crowdfundly-activites-load-more\");\n    if ( single_campaign_activites ) {\n\n        let current_page = 1;\n        single_campaign_activites.click(function(e) {\n            e.preventDefault();\n            const $self = $(this);\n            const target_div = $('#activities .activities');\n            const last_page = $(this).data('last-page');\n            current_page += 1;\n\n            $self.find('.ml-2').text(crowdfundlyPublicData.loading);\n\n            $.ajax({\n                url: crowdfundlyPublicData.ajax_url,\n                type: 'POST',\n                data: {\n                    action: \"cf_activities_loadmore\",\n                    security: crowdfundlyPublicData.nonce,\n                    camp_id: $(this).data('camp-id'),\n                    org_settings: $(this).data('org-settings'),\n                    camp_currency: $(this).data('camp-currency'),\n                    current_page: current_page\n                },\n                success: function(response) {\n                    console.log('activityTabLoadmore', response)\n                    $(response).appendTo(target_div);\n\n                    if( last_page == current_page ) {\n                        setTimeout( function() {\n                            $self.css({\"display\": \"none\"});\n                        }, 300 );\n                    }\n                    $self.find('.ml-2').text(crowdfundlyPublicData.load_more);\n                },\n                error: function(error) {\n                    console.log(error);\n                    $self.find('.ml-2').text(crowdfundlyPublicData.load_more);\n                }\n            });\n        });\n    }\n}\n\nexports.activityTabLoadmore = activityTabLoadmore;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/activityTabLoadmore.js?");

/***/ }),

/***/ "./assets/public/dev/allCampAjaxLoadMore.js":
/*!**************************************************!*\
  !*** ./assets/public/dev/allCampAjaxLoadMore.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function allCampAjaxLoadMore() {\n    const crowdfundly_all_camp_loadmore = $(\"#crowdfundly-all-camp-loadmore\");\n\n    if ( crowdfundly_all_camp_loadmore ) {\n        let current_page = 2;\n        let current_items = 6;\n\n        crowdfundly_all_camp_loadmore.click( function() {\n            const $self = $(this);\n\n            current_page += 1;\n            current_items += 3;\n            const target_div = $('#all-camp-row');\n            const last_page = $(this).data('last-page');\n            const total = $(this).data('total-cam');\n\n            $self.text(crowdfundlyPublicData.loading);\n            $self.attr('disabled', true);\n            \n            $.ajax({\n                url: crowdfundlyPublicData.ajax_url,\n                type: 'POST',\n                data: {\n                    action: \"cf_all_campaign_load_more\",\n                    security: crowdfundlyPublicData.nonce,\n                    grid_column: $(this).data('column'),\n                    per_page: $(this).data('per-page'),\n                    current_page: current_page,\n                    org_settings: $(this).data('org-settings')\n                },\n                success: function(response) {\n                    $(response).appendTo(target_div);\n                    console.log(\"current_items\", current_items, 'total', total);\n                    if( total  <= current_items ) {\n                        setTimeout( function() {\n                            $self.css({\"display\": \"none\"});\n                        }, 100 );\n                    }\n                    $self.text(crowdfundlyPublicData.load_more);\n                    $self.removeAttr('disabled');\n                },\n                error: function(error) {\n                    console.log(error);\n                    $self.text(crowdfundlyPublicData.load_more);\n                    $self.removeAttr('disabled');\n                }\n            });\n        });\n    }\n}\n\nexports.allCampAjaxLoadMore = allCampAjaxLoadMore;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/allCampAjaxLoadMore.js?");

/***/ }),

/***/ "./assets/public/dev/allCampSearch.js":
/*!********************************************!*\
  !*** ./assets/public/dev/allCampSearch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function allCampSearch() {\n    const urlSearchParams = new URLSearchParams(window.location.search);\n    if ( urlSearchParams.has('search') || urlSearchParams.has('type') ) {\n        $(\"#crowdfundly-all-camp-loadmore\").css('display', 'none');\n    }\n\n    const searchInput = $(\"#allCampaignSearchBox\");\n    searchInput.keypress(function(event) {\n        const clearBtn = $(\".all-campaign__filter-search-btn-clear\");\n\n        if ($(this).val() !== '') {\n            clearBtn.addClass('show');\n\n            clearBtn.click(function() {\n                searchInput.val('');\n                $(this).removeClass('show');\n            })\n        }\n    });\n    searchInput.keyup(function(event) {\n        if (event.code === 'Enter') {\n            const searchParams = new URLSearchParams(window.location.search);\n            const location = $(this).data('page-url');\n            if ($(this).val()) {\n                searchParams.set('search', $(this).val());\n                window.location.href = location + '?' + searchParams.toLocaleString();\n            }\n        }\n\n        if (event.code === \"Backspace\" && $(this).val() == '') {\n            const clearBtn = $(\".all-campaign__filter-search-btn-clear\");\n            clearBtn.removeClass('show');\n        }\n    });\n\n    const allCampaignTypeSelectElem = $(\"#allCampaignTypeSelect\");\n    allCampaignTypeSelectElem.change(function () {\n        const searchParams = new URLSearchParams(window.location.search);\n        const location = $(this).data('page-url');\n\n        if ($(this).val()) {\n            searchParams.set('type', $(this).val());\n            window.location.href = location + '?' + searchParams.toLocaleString();\n        }\n    });\n}\n\nexports.allCampSearch = allCampSearch;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/allCampSearch.js?");

/***/ }),

/***/ "./assets/public/dev/donation/afterDonation.js":
/*!*****************************************************!*\
  !*** ./assets/public/dev/donation/afterDonation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function afterDonation(capture) {\n    const form = $('.cf-donation-form-update');\n    const formBtn = $('.cf-donation-update');\n    if (! form) return; \n\n    form.submit(function(e) {\n        e.preventDefault()\n\n        formBtn.attr('disabled', true)\n        formBtn.html(crowdfundlyPublicData.loading);\n        const data = {}\n        const dataArr = $(this).serializeArray();\n        $(dataArr).each(function(i) {\n            data[dataArr[i]['name']] = dataArr[i]['value'];\n        })\n        data.key = capture.key\n        // console.log('data', data)\n\n        const queries = '?action=cf_update_donnar_info&security=' + crowdfundlyPublicData.nonce;\n        fetch(\n            crowdfundlyPublicData.ajax_url + queries,\n            {\n                method: \"post\",\n                body: JSON.stringify(data)\n            }\n        )\n        .then(function(res) {\n            return res.json();\n        })\n        .then(async function(data) {\n            // console.log(data);\n            if (data === true) {\n                location.replace(form.data('camp-permalink'));\n            } else {\n                swal({\n                    title: crowdfundlyPublicData.failed,\n                    text: data.data.message,\n                    icon: 'warning',\n                    button: false,\n                });\n            }\n        })\n        .catch(function (error) {\n            console.log('error::', error.response);\n            swal({\n                title: crowdfundlyPublicData.failed,\n                text: error.response.data.message,\n                icon: 'warning',\n                button: false,\n            });\n        })\n    });\n}\n\nexports.afterDonation = afterDonation;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/afterDonation.js?");

/***/ }),

/***/ "./assets/public/dev/donation/donation.js":
/*!************************************************!*\
  !*** ./assets/public/dev/donation/donation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { confirmPaypalPayment } = __webpack_require__(/*! ./paypal/confirmPaypalPayment.js */ \"./assets/public/dev/donation/paypal/confirmPaypalPayment.js\");\nconst { donationForm } = __webpack_require__(/*! ./donationForm.js */ \"./assets/public/dev/donation/donationForm.js\");\nconst { packageDonation } = __webpack_require__(/*! ./packageDonation.js */ \"./assets/public/dev/donation/packageDonation.js\");\n// const { paymentTypeCallback } = require('./paymentTypeCallback.js');\nconst { rewardDonation } = __webpack_require__(/*! ./rewardDonation.js */ \"./assets/public/dev/donation/rewardDonation.js\");\nconst { stripeUpdateDonnerData } = __webpack_require__(/*! ./stripe/stripeUpdateDonnerData.js */ \"./assets/public/dev/donation/stripe/stripeUpdateDonnerData.js\");\nconst { razorpayUpdateDonnerData } = __webpack_require__(/*! ./razorpay/razorpayUpdataDonnarData.js */ \"./assets/public/dev/donation/razorpay/razorpayUpdataDonnarData.js\");\n\nfunction donation() {\n    const donationBtn = $(\".donation-btn\");\n\n    if ( donationBtn && donationBtn.data('donation-type') === 'donation' ) {\n        donationBtn.click(function(e) {\n            e.preventDefault();\n            \n            donationForm();\n            // $(\".cf-payment-btn\").click(paymentTypeCallback);\n        });\n    }\n\n    rewardDonation();\n    packageDonation();\n    confirmPaypalPayment();\n    stripeUpdateDonnerData();\n    razorpayUpdateDonnerData();\n}\n\nexports.donation = donation;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/donation.js?");

/***/ }),

/***/ "./assets/public/dev/donation/donationForm.js":
/*!****************************************************!*\
  !*** ./assets/public/dev/donation/donationForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { paymentTypeCallback } = __webpack_require__(/*! ./paymentTypeCallback */ \"./assets/public/dev/donation/paymentTypeCallback.js\");\n\nfunction donationForm() {\n    $(\".cf-camp-header\").removeClass('cf-show')\n    $(\".cf-donation-form\").addClass('cf-show');\n\n    const backBtn = $(\".cf-back-btn\");\n    backBtn.click(function(e) {\n        $(\".cf-camp-header\").addClass('cf-show');\n        $(\".cf-donation-form\").removeClass('cf-show');\n    });\n\n    $('#cf-donation-amount').keyup(function(e) {\n        $('.cf-donation-amount').val($(this).val())\n    });\n\n    $(\".cf-payment-btn\").click(paymentTypeCallback);\n}\n\nexports.donationForm = donationForm;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/donationForm.js?");

/***/ }),

/***/ "./assets/public/dev/donation/formDataHandle.js":
/*!******************************************************!*\
  !*** ./assets/public/dev/donation/formDataHandle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function formDataHandle(formData) {\n    const form = $('.cf-donation-form-type');\n    const isShipping = $('.cf-donation-form-type').data('shipping')\n    let shippingAmount = 0;\n\n    const data = {\n        // tip_amount: 0,\n        shipping_amount:  shippingAmount,\n        campaign_id: form.data('camp-id'),\n        on_success: form.data('camp-permalink'),\n        on_failed: form.data('camp-permalink'),\n        recurring: false,\n    }\n    if (form.data('reward-id')) {\n        data.reward_id = form.data('reward-id')\n    }\n\n    $(formData).each(function(i) {\n        if ( formData[i]['name'] == 'is_anonymous' ) {\n            data[formData[i]['name']] = formData[i]['value'] == \"true\" ? true : false;\n        } else {\n            data[formData[i]['name']] = formData[i]['value'];\n        }\n    });\n\n    if ( isShipping == true ) {\n        const shippingAmount = $('#shipping_location').val().split(' ').pop();\n        data.shipping_amount = Number(shippingAmount);\n        data.shipping_location = $(\"#cf-donation-country\").val();\n\n        data.shipping_address = {}\n        const {shipping_address} = data\n\n        shipping_address.country = data.shipping_country;\n        delete data.shipping_country;\n        shipping_address.city = data.shipping_city;\n        delete data.shipping_city;\n        shipping_address.address = data.shipping_address_line;\n        delete data.shipping_address_line;\n        shipping_address.zip_code = data.shipping_zip;\n        delete data.shipping_zip;\n        shipping_address.state = data.shipping_state;\n        delete data.shipping_state;\n        delete data.shipping_country_select;\n    }\n    // console.log('beforeDonations', data);\n    return data;\n}\n\nexports.formDataHandle = formDataHandle;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/formDataHandle.js?");

/***/ }),

/***/ "./assets/public/dev/donation/modalCallBack.js":
/*!*****************************************************!*\
  !*** ./assets/public/dev/donation/modalCallBack.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { paymentTypeCallback } = __webpack_require__(/*! ./paymentTypeCallback.js */ \"./assets/public/dev/donation/paymentTypeCallback.js\");\nconst { donationForm } = __webpack_require__(/*! ./donationForm.js */ \"./assets/public/dev/donation/donationForm.js\");\n\nfunction modalCallBack() {\n    const reward_modal = $(\".back-modal\");\n    const reward_modal_close = $('.reward-modal-close');\n    const reward_modal_overlay = $('#reward-modal-overlay');\n\n    reward_modal.addClass('show-modal');\n\n    reward_modal_close.click(function(e) {\n        e.preventDefault();\n        reward_modal.removeClass('show-modal');\n    });\n\n    reward_modal_overlay.click(function(e) {\n        reward_modal.removeClass('show-modal');\n    });\n\n    const getProduct = $(\".reward-get-product\");\n    if ( getProduct ) {\n        getProduct.click(function(e) {\n            e.preventDefault();\n            reward_modal.removeClass('show-modal');\n        });\n    }\n\n    const rewardInput = $(\"#reward-contribution-input\");\n    const rewardBtn = $(\"#reward-contribution-btn\");\n    if ( rewardInput ) {\n        rewardInput.keyup(() => {\n            if ( rewardInput.val() ) {\n                $('.cf-donation-amount').val(rewardInput.val())\n                rewardBtn.removeAttr('disabled');\n            } else {\n                rewardBtn.attr('disabled', true)\n            }\n        });\n\n        rewardBtn.click(function(e) {\n            e.preventDefault();\n            reward_modal.removeClass('show-modal');\n            \n            donationForm();\n            \n            $('.form.amount-wrap').addClass('show');\n            $('#service-preview').removeClass('show');\n            $('.cf-preset').addClass('show');\n            $('.tip-wrap').addClass('show');\n            $('#cf-donation-amount').removeAttr('disabled');\n            $('.form.shipping').html('')\n            $('#cf-donation-amount').val(rewardInput.val())\n            $('.cf-donation-amount').val(rewardInput.val())\n            $(\".cf-payment-btn\").click(paymentTypeCallback);\n        });\n    }\n\n    $('.cf-preset-btn').click(function(e) {\n        e.preventDefault();\n        $('#cf-donation-amount').val($(this).data('amount'));\n        $('.cf-donation-amount').val($(this).data('amount'));\n    });\n}\n\nexports.modalCallBack = modalCallBack;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/modalCallBack.js?");

/***/ }),

/***/ "./assets/public/dev/donation/packageDonation.js":
/*!*******************************************************!*\
  !*** ./assets/public/dev/donation/packageDonation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { donationForm } = __webpack_require__(/*! ./donationForm.js */ \"./assets/public/dev/donation/donationForm.js\");\nconst { modalCallBack } = __webpack_require__(/*! ./modalCallBack.js */ \"./assets/public/dev/donation/modalCallBack.js\");\nconst { servicePreview } = __webpack_require__(/*! ./servicePreview.js */ \"./assets/public/dev/donation/servicePreview.js\");\n\nfunction packageDonation() {\n    const supportBtn = $(\"#cf-sponsor-support\");\n    const membershipBtn = $(\"#cf-sponsor-membership\");\n\n    supportBtn.click(function(e) {\n        e.preventDefault();\n\n\t\t$('.reward-form').show();\n\t\t$('.reward-items').hide();\n\t\tmodalCallBack();\n    });\n\n    membershipBtn.click(function(e) {\n        e.preventDefault();\n\n\t\t$('.reward-items').show();\n\t\t$('.reward-form').hide();\n\t\tmodalCallBack();\n    });\n\n    const getProduct = $('.package-get-product');\n    getProduct.click(function(e) {\n\n        donationForm();\n\n        const amount = $(this).data('package-price')\n        const title = $(this).data('title')\n        const mediaUrl = $(this).data('media')\n        \n        $('#service-preview').addClass('show');\n        $('.form.amount-wrap').removeClass('show');\n        $('.tip-wrap').removeClass('show');\n        $('.cf-preset').removeClass('show');\n        $('#cf-donation-amount').attr('disabled', true);\n        $('.cf-donation-amount').val($(this).data('package-amount'));\n        $('#cf-tip-amount').val(0);\n        servicePreview(amount, title, mediaUrl);\n\n        if (! $(this).data('modal')) {\n            $(\"html, body\").animate({scrollTop: 200}, 1000);\n        } else {\n            $('.back-modal').removeClass('show-modal');\n        }\n    })\n}\n\nexports.packageDonation = packageDonation;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/packageDonation.js?");

/***/ }),

/***/ "./assets/public/dev/donation/paymentTypeCallback.js":
/*!***********************************************************!*\
  !*** ./assets/public/dev/donation/paymentTypeCallback.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { stripePayment } = __webpack_require__(/*! ./stripe/stripePayment.js */ \"./assets/public/dev/donation/stripe/stripePayment.js\");\nconst { paypalPayment } = __webpack_require__(/*! ./paypal/paypalPayment.js */ \"./assets/public/dev/donation/paypal/paypalPayment.js\");\nconst { razorpayPayment } = __webpack_require__(/*! ./razorpay/razorpayPayment.js */ \"./assets/public/dev/donation/razorpay/razorpayPayment.js\");\n\nfunction paymentTypeCallback(e) {\n    // e.preventDefault();\n\n    const paymentBtn = $(\".cf-payment-btn\");\n    const paymentType = $(\"#cf-payment-type\");\n\n    paymentBtn.each(function() {\n        if ($(this).hasClass('active')) {\n            $(this).removeClass('active')\n        }\n    });\n    // if (paymentType.val() != 'stripe') {\n    $(this).addClass('active');\n    // }\n\n    paymentType.val($(this).data('payment-type'));\n    stripePayment(paymentType.val());\n    paypalPayment(paymentType.val());\n    razorpayPayment(paymentType.val());\n}\n\nexports.paymentTypeCallback = paymentTypeCallback;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/paymentTypeCallback.js?");

/***/ }),

/***/ "./assets/public/dev/donation/paypal/confirmPaypalPayment.js":
/*!*******************************************************************!*\
  !*** ./assets/public/dev/donation/paypal/confirmPaypalPayment.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { afterDonation } = __webpack_require__(/*! ../afterDonation.js */ \"./assets/public/dev/donation/afterDonation.js\");\n\nfunction confirmPaypalPayment() {\n    let params = new URLSearchParams(location.search)\n    if ( ! params.get('token') && ! params.get('PayerID') ) return;\n\n    const btn = $('#cf-donation-btn');\n    btn.attr(\"disabled\", true);\n\n    let data = {\n        token: params.get('token'),\n        PayerID: params.get('PayerID'),\n        id: localStorage.getItem('cfPaymentID'),\n        paymentType: 'paypal'\n    }\n    console.log('confirmPaypalPayment', data)\n    const queries = '?action=cf_payment_confirm&security=' + crowdfundlyPublicData.nonce;\n    fetch(\n        crowdfundlyPublicData.ajax_url + queries,\n        {\n            method: \"post\",\n            body: JSON.stringify(data)\n        }\n    )\n    .then(function(res) {\n        return res.json();\n    })\n    .then(async function(data) {\n        console.log('confirm', data);\n        if (data.key) {\n            swal({\n                title: crowdfundlyPublicData.success,\n                text: crowdfundlyPublicData.contribution_thanks,\n                icon: 'success',\n                button: false,\n                timer: 3000\n            });\n            afterDonation(data)\n        } else {\n            swal({\n                title: crowdfundlyPublicData.failed,\n                text: data.data.message,\n                icon: 'warning',\n                button: false,\n            });\n        }\n    })\n    .catch(function (error) {\n        console.log('error::', error.response);\n        swal({\n            title: crowdfundlyPublicData.failed,\n            text: error.response.data.message,\n            icon: 'warning',\n            button: false,\n        });\n    })\n    .finally(async function() {\n        await localStorage.removeItem('cfPaymentID');\n    });\n}\n\nexports.confirmPaypalPayment = confirmPaypalPayment;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/paypal/confirmPaypalPayment.js?");

/***/ }),

/***/ "./assets/public/dev/donation/paypal/paypalInitiate.js":
/*!*************************************************************!*\
  !*** ./assets/public/dev/donation/paypal/paypalInitiate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function paypalInitiate(formData) {\n    const queries = '?action=get_payment_initiate&security=' + crowdfundlyPublicData.nonce;\n    fetch(\n        crowdfundlyPublicData.ajax_url + queries,\n        {\n            method: \"post\",\n            body: JSON.stringify(formData)\n        }\n    )\n    .then(function(res) {\n        return res.json();\n    })\n    .then(async function(data) {\n        console.log(data);\n        const {payment} = data\n        if (payment.request && payment.request.redirect_url) {\n            await localStorage.setItem('cfPaymentID', data.id);\n            await window.location.replace(payment.request.redirect_url);\n        } else {\n            $('#cf-donation-submit').removeAttr('disabled')\n            $('#cf-donation-submit').html(crowdfundlyPublicData.contribute_now)\n            swal({\n                title: crowdfundlyPublicData.failed,\n                text: crowdfundlyPublicData.help_text,\n                icon: 'warning',\n                button: false,\n            });\n        }\n    })\n    .catch(function (error) {\n        $('#cf-donation-submit').removeAttr('disabled')\n        $('#cf-donation-submit').html(crowdfundlyPublicData.contribute_now)\n        console.log('error::', error.response);\n    });\n}\n\nexports.paypalInitiate = paypalInitiate;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/paypal/paypalInitiate.js?");

/***/ }),

/***/ "./assets/public/dev/donation/paypal/paypalPayment.js":
/*!************************************************************!*\
  !*** ./assets/public/dev/donation/paypal/paypalPayment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { formDataHandle } = __webpack_require__(/*! ../formDataHandle.js */ \"./assets/public/dev/donation/formDataHandle.js\");\nconst { paypalInitiate } = __webpack_require__(/*! ./paypalInitiate.js */ \"./assets/public/dev/donation/paypal/paypalInitiate.js\");\n\nfunction paypalPayment(type) {\n    if ( type !== 'paypal' ) return;\n\n    const form = $('.cf-donation-form-type')\n    const formBtn = $('#cf-donation-submit')\n    formBtn.removeAttr('disabled')\n\n    const isShipping = $('.cf-donation-form-type').data('shipping')\n    let shippingAmount = 0;\n    const stripeCard = $('#stripe-card')\n    stripeCard.html('');\n    stripeCard.removeClass('card-loaded');\n\n    const data = {\n        tip_amount: 0,\n        shipping_amount:  shippingAmount,\n        campaign_id: form.data('camp-id'),\n        on_success: form.data('camp-permalink'),\n        on_failed: form.data('camp-permalink')\n    }\n    if (form.data('reward-id')) {\n        data.reward_id = form.data('reward-id')\n    }\n\n    form.submit(function(e) {\n        e.preventDefault()\n\n        formBtn.attr('disabled', true)\n        formBtn.html(crowdfundlyPublicData.loading);\n        let dataArr = $(this).serializeArray();\n        const data = formDataHandle(dataArr);\n\n        console.log('formData', data);\n        // return;\n        paypalInitiate(data)\t// get paypal initiate from saas\n    });\n}\n\nexports.paypalPayment = paypalPayment;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/paypal/paypalPayment.js?");

/***/ }),

/***/ "./assets/public/dev/donation/razorpay/razorpayCapture.js":
/*!****************************************************************!*\
  !*** ./assets/public/dev/donation/razorpay/razorpayCapture.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("const razorpayCapture = async (payload) => {\n    try {\n        let queries = '?action=cf_payment_confirm&security=' + crowdfundlyPublicData.nonce;\n        const res = await fetch(crowdfundlyPublicData.ajax_url + queries, { method: \"post\", body: JSON.stringify(payload) })\n        const resData = await res.json()\n        console.log(resData);\n    } catch (error) {\n        console.log(error);\n    }\n}\n\nexports.razorpayCapture = razorpayCapture;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/razorpay/razorpayCapture.js?");

/***/ }),

/***/ "./assets/public/dev/donation/razorpay/razorpayInitiate.js":
/*!*****************************************************************!*\
  !*** ./assets/public/dev/donation/razorpay/razorpayInitiate.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { razorpayCapture } = __webpack_require__(/*! ./razorpayCapture */ \"./assets/public/dev/donation/razorpay/razorpayCapture.js\");\nconst form = document.querySelector(\".cf-donation-form-type\")\nconsole.log('Data fROM',form);\nlet razorpayOptions = {\n  order_id: null,\n  handler: (response) => handleResponse(response)\n}\n\nconst razorpayInitiate = async (payload) => {\n  try {\n    const queries = '?action=get_payment_initiate&security=' + crowdfundlyPublicData.nonce;\n    const res = await fetch(crowdfundlyPublicData.ajax_url + queries, {\n      method: \"post\",\n      body: JSON.stringify(payload)\n    })\n    const responseData = await res.json()\n    console.log(responseData);\n    localStorage.setItem('responseData', JSON.stringify(responseData))\n    localStorage.setItem('fromData', JSON.stringify(payload))\n    const { amount, currency_code, payment } = responseData;\n    const { request } = payment\n    const rzpParams = {\n      amount:request.amount,\n      currency_code,\n      key: request.key_id,\n      order_id: request.order_id,\n          prefill:{\n            email: responseData.email\n        },\n        config: {\n          display: {\n            blocks: {\n              hdfc: { //name for HDFC block\n                name: \"Pay using HDFC Bank\",\n                instruments: [\n                  {\n                    method: \"card\",\n                    issuers: [\"HDFC\"]\n                  },\n                  {\n                    method: \"netbanking\",\n                    banks: [\"HDFC\"]\n                  },\n                ]\n              },\n              other: { //  name for other block\n                name: \"Other Payment modes\",\n                instruments: [\n                  {\n                    method: \"card\",\n                    issuers: [\"ICIC\"]\n                  },\n                  {\n                    method: 'netbanking',\n                  },\n                  {\n                    method: \"upi\"\n                  },\n                ]\n              }\n            },\n            // hide: [\n            //   {\n            //   method: \"upi\"\n            //   }\n            // ],\n            sequence: [\"block.hdfc\", \"block.other\"],\n            preferences: {\n              show_default_blocks: false // Should Checkout show its default blocks?\n            }\n          }\n        },\n    }\n    console.log(\"Razorpay Payment\",rzpParams);\n    razorpayOptions = { ...razorpayOptions, ...rzpParams }\n    const rzp = new Razorpay(razorpayOptions)\n    rzp.open()\n  } catch (error) {\n    console.log(error);\n  }\n}\nconst handleResponse = async (response) => {\n  try {\n    const responseData = JSON.parse(localStorage.getItem('responseData'))\n    const { id, key } = responseData\n    console.log(response);\n    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;\n    const payload = { razorpay_order_id, razorpay_payment_id, razorpay_signature, id }\n    console.log(\"Payload\", payload);\n    const queries = '?action=cf_verify_payment&security=' + crowdfundlyPublicData.nonce;\n    const res = await fetch(crowdfundlyPublicData.ajax_url + queries, {\n      method: \"post\",\n      body: JSON.stringify(payload)\n    })\n    const resData = await res.json()\n    if(resData.success){\n      console.log('Res Data found', payload);\n      razorpayCapture(payload)\n      const fromData = JSON.parse(localStorage.getItem('fromData'))\n      let url = fromData.on_success + '&razorpay_key=' +key;\n        setTimeout(function() {\n            location.replace(url);\n            localStorage.removeItem('fromData');\n            localStorage.removeItem('responseData');\n        }, 2000);\n    }\n  } catch (error) {\n    localStorage.removeItem('fromData');\n    localStorage.removeItem('responseData');\n    console.log(error);\n  }\n}\n\nexports.razorpayInitiate = razorpayInitiate;\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/razorpay/razorpayInitiate.js?");

/***/ }),

/***/ "./assets/public/dev/donation/razorpay/razorpayPayment.js":
/*!****************************************************************!*\
  !*** ./assets/public/dev/donation/razorpay/razorpayPayment.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { formDataHandle } = __webpack_require__(/*! ../formDataHandle.js */ \"./assets/public/dev/donation/formDataHandle.js\");\nconst { razorpayInitiate } = __webpack_require__(/*! ./razorpayInitiate.js */ \"./assets/public/dev/donation/razorpay/razorpayInitiate.js\");\n\nfunction razorpayPayment(type) {\n    if ( type !== 'razorpay' ) return;\n\n    const form = $('.cf-donation-form-type')\n    const formBtn = $('#cf-donation-submit')\n    formBtn.removeAttr('disabled')\n\n    const isShipping = $('.cf-donation-form-type').data('shipping')\n    let shippingAmount = 0;\n    const data = {\n        tip_amount: 0,\n        shipping_amount:  shippingAmount,\n        campaign_id: form.data('camp-id'),\n        on_success: form.data('camp-permalink'),\n        on_failed: form.data('camp-permalink')\n    }\n    if (form.data('reward-id')) {\n        data.reward_id = form.data('reward-id')\n    }\n\n    form.submit(function(e) {\n        e.preventDefault()\n        // e.stopPropagation();\n        formBtn.attr('disabled', true)\n        formBtn.html(crowdfundlyPublicData.loading);\n        let dataArr = $(this).serializeArray();\n        const data = formDataHandle(dataArr);\n\n        console.log('form Data', data);\n        // return;\n        razorpayInitiate(data)\t// get paypal initiate from saas\n    });\n}\n\nexports.razorpayPayment = razorpayPayment;\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/razorpay/razorpayPayment.js?");

/***/ }),

/***/ "./assets/public/dev/donation/razorpay/razorpayUpdataDonnarData.js":
/*!*************************************************************************!*\
  !*** ./assets/public/dev/donation/razorpay/razorpayUpdataDonnarData.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function razorpayUpdateDonnerData() {\n    let params = new URLSearchParams(location.search)\n    if ( ! params.get('razorpay_key') ) return;\n\n    const form = $('.cf-donation-form-update');\n    const formBtn = $('.cf-donation-update');\n    if (! form) return; \n\n    form.submit(function(e) {\n        e.preventDefault()\n\n        formBtn.attr('disabled', true)\n        formBtn.html(crowdfundlyPublicData.loading);\n        const data = {}\n        const dataArr = $(this).serializeArray();\n        $(dataArr).each(function(i) {\n            data[dataArr[i]['name']] = dataArr[i]['value'];\n        })\n        data.key = params.get('razorpay_key')\n\n        const queries = '?action=cf_update_donnar_info&security=' + crowdfundlyPublicData.nonce;\n        fetch(\n            crowdfundlyPublicData.ajax_url + queries,\n            {\n                method: \"post\",\n                body: JSON.stringify(data)\n            }\n        )\n        .then(function(res) {\n            return res.json();\n        })\n        .then(async function(data) {\n            if (data === true) {\n                location.replace(form.data('camp-permalink'));\n            } else {\n                swal({\n                    title: crowdfundlyPublicData.failed,\n                    text: data.data.message,\n                    icon: 'warning',\n                    button: false,\n                });\n            }\n        })\n        .catch(function (error) {\n            console.log('error::', error.response);\n            swal({\n                title: crowdfundlyPublicData.failed,\n                text: error.response.data.message,\n                icon: 'warning',\n                button: false,\n            });\n        })\n    });\n}\n\nexports.razorpayUpdateDonnerData = razorpayUpdateDonnerData;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/razorpay/razorpayUpdataDonnarData.js?");

/***/ }),

/***/ "./assets/public/dev/donation/rewardDonation.js":
/*!******************************************************!*\
  !*** ./assets/public/dev/donation/rewardDonation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { donationForm } = __webpack_require__(/*! ./donationForm.js */ \"./assets/public/dev/donation/donationForm.js\");\nconst { modalCallBack } = __webpack_require__(/*! ./modalCallBack.js */ \"./assets/public/dev/donation/modalCallBack.js\");\nconst { rewardShipping } = __webpack_require__(/*! ./rewardShipping.js */ \"./assets/public/dev/donation/rewardShipping.js\");\nconst { servicePreview } = __webpack_require__(/*! ./servicePreview.js */ \"./assets/public/dev/donation/servicePreview.js\");\n\nfunction rewardDonation() {\n    const campaign_reward_btn = $(\".donation-btn\");\n    const getProduct = $('.reward-get-product');\n    if ( campaign_reward_btn.data('donation-type') !== 'reward' ) return;\n\n    campaign_reward_btn.click(function(e) {\n        e.preventDefault();\n        modalCallBack();    // if modal\n    });\n\n    let locations = '';\n    // if click from tab\n    getProduct.click(function(e) {\n        \n        donationForm();\n        \n        const donationAmount = $(this).data('reward-amount')\n        const regularAmount = $(this).data('regular-price')\n        const offerAmount = $(this).data('offer-price')\n        const title = $(this).data('title')\n        const mediaUrl = $(this).data('media')\n        \n        $('#service-preview').addClass('show');\n        $('.form.amount-wrap').removeClass('show');\n        $('.cf-preset').removeClass('show');\n        $('.tip-wrap').removeClass('show');\n        $('#cf-donation-amount').attr('disabled', true);\n        $('.cf-donation-amount').val(donationAmount);\n        $('#cf-tip-amount').val(0);\n\n        servicePreview(offerAmount, title, mediaUrl, regularAmount);\n\n        const shippingLocation = $(this).data('shipping-locations');\n        const currencyCode = $(this).data('currency-code');\n        \n        if ( shippingLocation.length > 0 ) {\n            $('.cf-donation-form-type').attr('data-shipping', true);\n\n            shippingLocation.forEach(location => {\n                let locationOption = location.location + ' - ' + currencyCode + ' ' + location.shippingFee;\n                $('.form.shipping').addClass('show');\n    \n                $('#shipping_location').append(\n                    `<option value=\"${locationOption}\">\n                        ${locationOption}\n                    </option>`\n                );\n            });\n\n            if (locations) {\n                $('.form.shipping').html(locations)\n            }\n        } else {\n            locations = $('.form.shipping').clone()\n            $('.form.shipping').html('')\n        }\n\n        $('.cf-donation-form-type').attr('data-reward-id', $(this).data('reward-id'));\n\n        $(\"html, body\").animate({scrollTop: 200}, 1000);\n    });\n\n    // shipping data handle\n    rewardShipping();\n}\n\nexports.rewardDonation = rewardDonation;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/rewardDonation.js?");

/***/ }),

/***/ "./assets/public/dev/donation/rewardShipping.js":
/*!******************************************************!*\
  !*** ./assets/public/dev/donation/rewardShipping.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function rewardShipping() {\n    $('#shipping_location').on('change', function(e) {\n        const location = $(this).val().split(' ');\n        const shippingFee = location[location.length - 1];\n\n        if ((location.length && location[0].toLowerCase() == 'worldwide') || (location.length > 1 && location[0] === 'World' && location[1] === 'Wide')) {\n            fetch(crowdfundlyPublicData.cf_api_url + 'countries')\n                .then(res => res.json())\n                .then(data => {\n                    $('#cf-country-options').html(\n                        '<option value=\"\">Select a country*</option>' + \n                        data.map(country => `<option value=\"${country.country_name}\">${country.country_name}</option>`).join('')\n                    );\n                });\n\n            $('#cf-donation-country').hide();\n            $('#cf-country-options').show();\n            $('#cf-country-options').attr('required', 'required');\n            $('#cf-donation-country').val('');\n\n            $('#cf-country-options').select2({}).on('change', function(e) {\n                const country = $(\"#cf-country-options option:selected\").text();\n                $(\"#cf-donation-country\").val(country);\n                $(\"#cf-donation-country\").attr('data-shipping-amount', shippingFee);\n            });\n        } else {\n            const country = $(this).val().split(' - ');\n            const shippingCountry = country[0];\n            $(\"#cf-donation-country\").attr('data-shipping-amount', shippingFee);\n            $('#cf-donation-country').val(shippingCountry)\n\n            $('#cf-donation-country').show();\n            $('#cf-country-options').removeAttr('required');\n            $('#cf-country-options').hide();\n            $('.shipping .select2.select2-container').hide();\n        }\n    });\n}\n\nexports.rewardShipping = rewardShipping;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/rewardShipping.js?");

/***/ }),

/***/ "./assets/public/dev/donation/servicePreview.js":
/*!******************************************************!*\
  !*** ./assets/public/dev/donation/servicePreview.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function servicePreview(amount, title, mediaUrl, regularPrice = null) {\n    const previewElement = $('#service-preview');\n    const rewardService = $('.reward-get-product');\n    const packageService = $('.package-get-product');\n\n    if (rewardService.length) {\n        previewElement.html(`\n            <div class=service-media style=\"background-image: url(${mediaUrl})\"></div>\n            <div class=\"service-inner\">\n                <div class=\"service-title\">${title}</div>\n                <div class=\"service-price\">\n                    <div class=\"service-offer-price\">${amount}</div>\n                    <div class=\"service-regular-price\">${regularPrice}</div>\n                </div>\n            </div>\n        `);\n    }\n\n    if (packageService.length) {\n        previewElement.html(`\n            <div class=service-media style=\"background-image: url(${mediaUrl})\"></div>\n            <div class=\"service-inner\">\n                <div class=\"service-title\">${title}</div>\n                <div class=\"service-price\">\n                    <div class=\"service-offer-price\">${amount}</div>\n                </div>\n            </div>\n        `);\n    }\n}\n\nexports.servicePreview = servicePreview;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/servicePreview.js?");

/***/ }),

/***/ "./assets/public/dev/donation/stripe/stripeCapture.js":
/*!************************************************************!*\
  !*** ./assets/public/dev/donation/stripe/stripeCapture.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function stripeCapture(paymentID, confirm) {\n    const form = $('.cf-donation-form-type');\n\n    confirm.paymentType = 'stripe';\n    confirm.paymentID = paymentID;\n    console.log(confirm.paymentID);\n    let queries = '?action=cf_payment_confirm&security=' + crowdfundlyPublicData.nonce;\n    fetch(\n        crowdfundlyPublicData.ajax_url + queries,\n        {\n            method: \"post\",\n            body: JSON.stringify(confirm)\n        }\n    )\n    .then(function(res) {\n        return res.json();\n    })\n    .then(async function(data) {\n        // console.log('stripeCapture', data);\n\n        if (data.key) {\n            swal({\n                title: crowdfundlyPublicData.success,\n                text: crowdfundlyPublicData.contribution_thanks,\n                icon: 'success',\n                button: false,\n            });\n            const url = form.data('camp-permalink') + '&stripe_key=' + data.key;\n            setTimeout(function() {\n                location.replace(url);\n            }, 2000);\n        }\n\n        if (data.success) {\n            $('#cf-donation-submit').removeAttr('disabled')\n            $('#cf-donation-submit').html(crowdfundlyPublicData.contribute_now)\n            swal({\n                title: crowdfundlyPublicData.failed,\n                text: crowdfundlyPublicData.help_text,\n                icon: 'warning',\n                button: false,\n            });\n        }\n    })\n    .catch(function (error) {\n        $('#cf-donation-submit').removeAttr('disabled')\n        $('#cf-donation-submit').html(crowdfundlyPublicData.contribute_now)\n        console.log('error', error.response);\n    });\n}\n\nexports.stripeCapture = stripeCapture;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/stripe/stripeCapture.js?");

/***/ }),

/***/ "./assets/public/dev/donation/stripe/stripeCard.js":
/*!*********************************************************!*\
  !*** ./assets/public/dev/donation/stripe/stripeCard.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function stripeCreateCard(userID) {\n    const cardDom = document.querySelector('#stripe-card');\n    const publicKey = 'pk_test_L1NRCsYBNysQe8dCiu1knbFj';\n\n    const stripe = Stripe(publicKey, {\n        stripeAccount: userID\n    })\n    const elements = stripe.elements()\n    const card = elements.create(\"card\")\n    cardDom.classList.add('card-loaded')\n    card.mount(cardDom);\n\n    return { stripe: stripe, stripeCard: card};\n}\n\nexports.stripeCreateCard = stripeCreateCard;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/stripe/stripeCard.js?");

/***/ }),

/***/ "./assets/public/dev/donation/stripe/stripeIntent.js":
/*!***********************************************************!*\
  !*** ./assets/public/dev/donation/stripe/stripeIntent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { formDataHandle } = __webpack_require__(/*! ../formDataHandle */ \"./assets/public/dev/donation/formDataHandle.js\");\nconst { stripeCapture } = __webpack_require__(/*! ./stripeCapture */ \"./assets/public/dev/donation/stripe/stripeCapture.js\");\nconst { stripePaymentConfirm } = __webpack_require__(/*! ./stripePaymentConfirm */ \"./assets/public/dev/donation/stripe/stripePaymentConfirm.js\");\n\nfunction stripeIntent(stripe, card) {\n    const form = $('.cf-donation-form-type')\n    const formBtn = $('#cf-donation-submit')\n\n    form.submit(function(e) {\n        // e.stopPropagation();\n        e.preventDefault();\n        formBtn.attr('disabled', true)\n        formBtn.html(crowdfundlyPublicData.loading);\n\n        const dataArr = $(this).serializeArray();\n        const data = formDataHandle(dataArr);\n        console.log('form', data);\n\n        const queries = '?action=get_payment_initiate&security=' + crowdfundlyPublicData.nonce;\n        fetch(\n            crowdfundlyPublicData.ajax_url + queries,\n            {\n                method: \"post\",\n                body: JSON.stringify(data)\n            }\n        )\n        .then(function(res) {\n            return res.json();\n        })\n        .then(async function(data) {\n            console.log('stripePaymentIntent', data, data.id);\n            // console.log('stripePaymentIntent', data.id);\n            const paymentID = data.id;\n\n            const paymentConfirm = stripePaymentConfirm(stripe, card, data)\n            paymentConfirm\n                .then(response => {\n                    const {paymentIntent} = response\n                    // console.log('paymentConfirm', paymentIntent, paymentIntent.status);\n\n                    if ( paymentIntent.status === 'succeeded' ) {\n                        stripeCapture(paymentID, response)\n                    }\n                })\n                .catch( error => {\n                    $('#cf-donation-submit').removeAttr('disabled')\n                    $('#cf-donation-submit').html(crowdfundlyPublicData.contribute_now)\n                    console.log('error', error)\n                });\n        })\n        .catch(function (error) {\n            $('#cf-donation-submit').removeAttr('disabled')\n            $('#cf-donation-submit').html(crowdfundlyPublicData.contribute_now)\n            console.log('error', error.response);\n        });\n    })\n}\n\nexports.stripeIntent = stripeIntent;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/stripe/stripeIntent.js?");

/***/ }),

/***/ "./assets/public/dev/donation/stripe/stripePayment.js":
/*!************************************************************!*\
  !*** ./assets/public/dev/donation/stripe/stripePayment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { stripeCreateCard } = __webpack_require__(/*! ./stripeCard */ \"./assets/public/dev/donation/stripe/stripeCard.js\");\nconst { stripeIntent } = __webpack_require__(/*! ./stripeIntent */ \"./assets/public/dev/donation/stripe/stripeIntent.js\");\n\nfunction stripePayment(type) {\n    if ( type !== 'stripe' ) return;\n\n    const form = $('.cf-donation-form-type');\n    const campId = form.data('camp-id');\n\n    const bodyParams = {\n        action: 'action=cf_stripe_payment',\n        campId: '&campId=' + campId,\n        nonce: '&security=' + crowdfundlyPublicData.nonce,\n    }\n    fetch(\n        crowdfundlyPublicData.ajax_url,\n        {\n            method:\"post\",\n            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n            body: bodyParams.action + bodyParams.campId + bodyParams.nonce\n        }\n    )\n    .then(function(res) {\n        return res.json();\n    })\n    .then(function(data) {\n        // console.log('stripePayment', data)\n        const {stripe, stripeCard} = stripeCreateCard(data.user_id);\n\n        stripeCard.on('change', function(event) {\n            // console.log(\"stripe crad change: \", event.complete, event)\n            if (event.complete) {\n                $('#cf-donation-submit').removeAttr('disabled')\n            }\n        })\n        stripeIntent(stripe, stripeCard)\n    })\n    .catch(function (error) {\n        console.log('error', error.response);\n    });\n}\n\nexports.stripePayment = stripePayment;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/stripe/stripePayment.js?");

/***/ }),

/***/ "./assets/public/dev/donation/stripe/stripePaymentConfirm.js":
/*!*******************************************************************!*\
  !*** ./assets/public/dev/donation/stripe/stripePaymentConfirm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function stripePaymentConfirm(stripe, stripeCard, initiateData) {\n    const {payment} = initiateData\n\n    return stripe.confirmCardPayment(\n        payment.request.client_secret,\n        {\n            payment_method: { card: stripeCard }\n        }    \n    );\n}\n\nexports.stripePaymentConfirm = stripePaymentConfirm;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/stripe/stripePaymentConfirm.js?");

/***/ }),

/***/ "./assets/public/dev/donation/stripe/stripeUpdateDonnerData.js":
/*!*********************************************************************!*\
  !*** ./assets/public/dev/donation/stripe/stripeUpdateDonnerData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function stripeUpdateDonnerData() {\n    let params = new URLSearchParams(location.search)\n    if ( ! params.get('stripe_key') ) return;\n\n    const form = $('.cf-donation-form-update');\n    const formBtn = $('.cf-donation-update');\n    if (! form) return; \n\n    form.submit(function(e) {\n        // e.preventDefault()\n        e.stopPropagation();\n\n        formBtn.attr('disabled', true)\n        formBtn.html(crowdfundlyPublicData.loading);\n        const data = {}\n        const dataArr = $(this).serializeArray();\n        $(dataArr).each(function(i) {\n            data[dataArr[i]['name']] = dataArr[i]['value'];\n        })\n        data.key = params.get('stripe_key')\n\n        const queries = '?action=cf_update_donnar_info&security=' + crowdfundlyPublicData.nonce;\n        fetch(\n            crowdfundlyPublicData.ajax_url + queries,\n            {\n                method: \"post\",\n                body: JSON.stringify(data)\n            }\n        )\n        .then(function(res) {\n            return res.json();\n        })\n        .then(async function(data) {\n            if (data === true) {\n                location.replace(form.data('camp-permalink'));\n            } else {\n                swal({\n                    title: crowdfundlyPublicData.failed,\n                    text: data.data.message,\n                    icon: 'warning',\n                    button: false,\n                });\n            }\n        })\n        .catch(function (error) {\n            console.log('error::', error.response);\n            swal({\n                title: crowdfundlyPublicData.failed,\n                text: error.response.data.message,\n                icon: 'warning',\n                button: false,\n            });\n        })\n    });\n}\n\nexports.stripeUpdateDonnerData = stripeUpdateDonnerData;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/donation/stripe/stripeUpdateDonnerData.js?");

/***/ }),

/***/ "./assets/public/dev/loaderForVideo.js":
/*!*********************************************!*\
  !*** ./assets/public/dev/loaderForVideo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function loaderForVideo() {\n    // document.onreadystatechange = function() {\n    //     if (document.readyState !== \"complete\") {\n    //         document.querySelector(\n    //           \".thumbnails\").style.visibility = \"hidden\";\n    //         document.querySelector(\n    //           \".cf-loaders\").style.visibility = \"visible\";\n    //     } else {\n    //         document.querySelector(\n    //           \".cf-loaders\").style.display = \"none\";\n    //         document.querySelector(\n    //           \".thumbnails\").style.visibility = \"visible\";\n    //     }\n    // };\n}\n\nexports.loaderForVideo = loaderForVideo;\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/loaderForVideo.js?");

/***/ }),

/***/ "./assets/public/dev/main.js":
/*!***********************************!*\
  !*** ./assets/public/dev/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {slickSliders} = __webpack_require__(/*! ./slickSlider.js */ \"./assets/public/dev/slickSlider.js\");\nconst {allCampSearch} = __webpack_require__(/*! ./allCampSearch.js */ \"./assets/public/dev/allCampSearch.js\");\nconst {allCampAjaxLoadMore} = __webpack_require__(/*! ./allCampAjaxLoadMore.js */ \"./assets/public/dev/allCampAjaxLoadMore.js\");\nconst {activityTabLoadmore} = __webpack_require__(/*! ./activityTabLoadmore.js */ \"./assets/public/dev/activityTabLoadmore.js\");\nconst {donation} = __webpack_require__(/*! ./donation/donation.js */ \"./assets/public/dev/donation/donation.js\");\nconst { share } = __webpack_require__(/*! ./share.js */ \"./assets/public/dev/share.js\");\nconst { reminder } = __webpack_require__(/*! ./reminder.js */ \"./assets/public/dev/reminder.js\");\nconst { storyTabData } = __webpack_require__(/*! ./storyTabData.js */ \"./assets/public/dev/storyTabData.js\");\nconst { noScroll } = __webpack_require__(/*! ./noScroll.js */ \"./assets/public/dev/noScroll.js\");\nconst { loaderForVideo } = __webpack_require__(/*! ./loaderForVideo.js */ \"./assets/public/dev/loaderForVideo.js\");\nconst { topContributersTabLoadmore } = __webpack_require__(/*! ./topContributersTabLoadMore.js */ \"./assets/public/dev/topContributersTabLoadMore.js\");\n\n;(function( $ ) {\n\t'use strict';\n    window.$ = $;\n\t\n\t$(document).ready(function () {\n        slickSliders();\n        allCampSearch();\n        allCampAjaxLoadMore();\n        activityTabLoadmore();\n        donation();\n        share();\n        reminder();\n        storyTabData();\n        noScroll();\n        loaderForVideo();\n        topContributersTabLoadmore();\n\n        $('.cf-preset-btn').click(function(e) {\n            e.preventDefault();\n            $('#cf-donation-amount').val($(this).data('amount'));\n            $('.cf-donation-amount').val($(this).data('amount'));\n        });\n    });\n})(jQuery);\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/main.js?");

/***/ }),

/***/ "./assets/public/dev/noScroll.js":
/*!***************************************!*\
  !*** ./assets/public/dev/noScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function noScroll() {\n    $('input[type=number]').on('wheel', function(e){\n        return false;\n    });\n}\n\nexports.noScroll = noScroll;\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/noScroll.js?");

/***/ }),

/***/ "./assets/public/dev/reminder.js":
/*!***************************************!*\
  !*** ./assets/public/dev/reminder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function reminder() {\n    const reminderBtn = $(\"#set-reminder-btn\");\n    const reminderModal = $(\"#crowdfundly-set-reminder-modal\");\n    const overlay = $(\"#set-reminder-modal-overlay\");\n    const closeBtn = $(\"#set-reminder-modal-close-btn\");\n    \n    reminderBtn.on('click', function() {\n        reminderModal.addClass('g-modal--show');\n    })\n    overlay.on('click', function() {\n        reminderModal.removeClass('g-modal--show');\n    })\n    closeBtn.on('click', function() {\n        reminderModal.removeClass('g-modal--show');\n    })\n\n    reminderSubmitFrom()\n}\nfunction reminderSubmitFrom() {\n    const reminderSubmitBtn = $(\"#reminder-submit-btn\");\n    var campaignFromId = document.getElementById(\"reminder-form\");\n    var campaingId = campaignFromId.getAttribute('data-camp-id');\n    // var reminderHour = document.getElementById(\"reminder-0\").value;\n    // var reminderOne = document.getElementById(\"reminder-1\").value;\n    // var reminderTwo = document.getElementById(\"reminder-2\").value;\n    // var reminderThree = document.getElementById(\"reminder-3\").value;\n    // var receiverEmail = document.getElementById(\"receiver_email\").value;\n\n    $(\"#reminder-form\").on(\"submit\", function(event) {\n        event.preventDefault();\n\n        console.log('reminder submit', $(this).serializeArray())\n        var campaignFromId = document.getElementById(\"reminder-form\");\n        var campaingId = campaignFromId.getAttribute('data-camp-id');\n        var reminderHour = document.getElementById(\"reminder-0\").value;\n        var reminderOne = document.getElementById(\"reminder-1\").value;\n        var reminderTwo = document.getElementById(\"reminder-2\").value;\n        var reminderThree = document.getElementById(\"reminder-3\").value;\n        var receiverEmail = document.getElementById(\"receiver_email\").value;\n        \n        $.ajax({\n            type:'POST',\n            url:crowdfundlyPublicData.ajax_url,\n            data: {\n                action: \"cf_reminder\",\n                security: crowdfundlyPublicData.nonce,\n                reminderForm: JSON.stringify($(this).serializeArray())\n            },\n            success: function(response) {\n                console.log('response', response.message);\n                swal({\n                    text: response.message,\n                    icon: 'success',\n                    button: false,\n                });\n                setTimeout( function() {\n                    window.location.reload(1);\n                }, 300 );\n            },\n            error: function(error) {\n                console.log(error);\n            }\n        });\n    });\n\n}\nexports.reminder = reminder;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/reminder.js?");

/***/ }),

/***/ "./assets/public/dev/share.js":
/*!************************************!*\
  !*** ./assets/public/dev/share.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function share() {\n    const shareBtn = $(\"#share-campaign-btn\");\n    const shareModal = $(\"#crowdfundly-share-modal\");\n    const overlay = $(\"#share-modal-overlay\");\n    const closeBtn = $(\"#share-modal-close-btn\");\n\n    shareBtn.on('click', function() {\n        shareModal.addClass('g-modal--show');\n    })\n    overlay.on('click', function() {\n        shareModal.removeClass('g-modal--show');\n    })\n    closeBtn.on('click', function() {\n        shareModal.removeClass('g-modal--show');\n    })\n}\n\nexports.share = share;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/share.js?");

/***/ }),

/***/ "./assets/public/dev/slickSlider.js":
/*!******************************************!*\
  !*** ./assets/public/dev/slickSlider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function slickSliders() {\n\n    $('.org-slider').slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: false,\n        fade: true,\n        autoplay:true,\n    });\n\n    $('.gallery-slider').slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: false,\n        fade: true,\n        asNavFor: '.gallery-slider-nav'\n    });\n\n    $('.gallery-slider-nav').slick({\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        asNavFor: '.gallery-slider',\n        dots: false,\n        focusOnSelect: true\n    });\n}\n\nexports.slickSliders = slickSliders;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/slickSlider.js?");

/***/ }),

/***/ "./assets/public/dev/storyTabData.js":
/*!*******************************************!*\
  !*** ./assets/public/dev/storyTabData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function storyTabData() {\n    const storyTab = $(\"#story-tab\");\n    if (! storyTab) return;\n    const url = new URL(\n        window.location.href\n      );\n     const slug = url.searchParams.get('camp');\n    //  if( !slug ) return;\n     \n    \n    window.addEventListener('load', function() {\n        $.ajax({\n            type:'POST',\n            url:crowdfundlyPublicData.ajax_url,\n            data: {\n                action: \"cf_story_data\",\n                security: crowdfundlyPublicData.nonce,\n                campSlug: slug,\n\n            },\n            success: function(response) {\n                console.log(url, response);\n                $(\"#story_tab\").html(response);\n            },\n            error: function(error) {\n                console.log(error);\n            }\n        });\n    })\n}\nexports.storyTabData = storyTabData;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/storyTabData.js?");

/***/ }),

/***/ "./assets/public/dev/topContributersTabLoadMore.js":
/*!*********************************************************!*\
  !*** ./assets/public/dev/topContributersTabLoadMore.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function topContributersTabLoadmore() {\n    const top_contributers = $(\"#crowdfundly-topcontributers-load-more\");\n    if ( top_contributers ) {\n\n        let current_page = 1;\n        top_contributers.click(function(e) {\n            e.preventDefault();\n            const $self = $(this);\n            const target_div = $('#top-contributors .donor-list');\n            const last_page = $(this).data('last-page');\n            current_page += 1;\n\n            $self.find('.ml-2').text(crowdfundlyPublicData.loading);\n\n            $.ajax({\n                url: crowdfundlyPublicData.ajax_url,\n                type: 'POST',\n                data: {\n                    action: \"cf_top_contributers_loadmore\",\n                    security: crowdfundlyPublicData.nonce,\n                    camp_id: $(this).data('camp-id'),\n                    org_settings: $(this).data('org-settings'),\n                    camp_currency: $(this).data('camp-currency'),\n                    current_page: current_page\n                },\n                success: function(response) {\n                    console.log('topContributers',response)\n                    $(response).appendTo(target_div);\n\n                    if( last_page == current_page ) {\n                        setTimeout( function() {\n                            $self.css({\"display\": \"none\"});\n                        }, 300 );\n                    }\n                    $self.find('.ml-2').text(crowdfundlyPublicData.load_more);\n                },\n                error: function(error) {\n                    console.log(error);\n                    $self.find('.ml-2').text(crowdfundlyPublicData.load_more);\n                }\n            });\n        });\n    }\n}\n\nexports.topContributersTabLoadmore = topContributersTabLoadmore;\n\n\n//# sourceURL=webpack://crowdfundly-wp/./assets/public/dev/topContributersTabLoadMore.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/public/dev/main.js");
/******/ 	
/******/ })()
;