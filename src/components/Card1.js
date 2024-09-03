import React from 'react'
import { Progress } from "@mantine/core";
import {useNavigate} from 'react-router-dom'
const Card1 = ({data,datacomp}) => {

  const perc= (datacomp?.completedDrills/datacomp?.totalDrills *100).toFixed(1)
  const navigate=useNavigate()
  return (
    <div
    xs={6}
    sm={6}
    className="upper-card text-shadow "
    style={{
      background: "#7257FF",
    }}
  >
    <div>
      <div className="circle-1 pulsate"></div>
      <div className="circle-2  pulsate"></div>
      <div className="card-art">
      <svg width="88" height="154" viewBox="0 0 88 154" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.7081 15.0112C64.138 15.6051 63.4328 16.0406 62.6546 16.3244C61.725 16.6628 60.6864 16.7859 59.6027 16.7125C57.4356 16.5634 55.0792 15.6311 53.0043 13.9585C51.4475 12.7046 50.2648 11.2071 49.5145 9.65719C48.7646 8.1054 48.4449 6.50122 48.6438 5.02973C48.7765 4.05002 49.1428 3.13225 49.7676 2.35865C50.3898 1.58505 51.2108 1.02904 52.1405 0.692904C53.0678 0.354477 54.1064 0.229049 55.1924 0.30247C57.3595 0.451608 59.7159 1.3862 61.7908 3.05615C63.3452 4.31043 64.528 5.81022 65.2783 7.35971C66.0282 8.90921 66.3502 10.5157 66.1513 11.9849C66.04 12.8082 65.7632 13.5868 65.3066 14.2728C65.219 14.4055 65.1246 14.5332 65.0251 14.656C64.9257 14.7818 64.8194 14.8999 64.7081 15.0112ZM62.3303 15.4345C63.1158 15.1485 63.7808 14.6942 64.2894 14.0625C64.7957 13.433 65.1009 12.6877 65.2121 11.8575C65.3257 11.0296 65.2454 10.1187 64.9731 9.18416C64.4336 7.31268 63.1322 5.35363 61.1973 3.79457C59.7445 2.62327 58.1499 1.85005 56.6241 1.48104C55.0957 1.11202 53.6406 1.15217 52.4624 1.58275C51.677 1.86917 51.012 2.32309 50.5034 2.95252C49.9971 3.58196 49.6942 4.32955 49.5806 5.15746C49.4671 5.98574 49.5501 6.89624 49.8196 7.83083C50.3592 9.70231 51.6605 11.6637 53.5982 13.2227C55.0486 14.3913 56.6433 15.1676 58.1713 15.534C59.6971 15.903 61.1522 15.8628 62.3303 15.4345Z" fill="#878CF0"/>
<path d="M65.3234 14.27L77.0865 23.7551C76.9423 23.8236 76.8123 23.923 76.7056 24.0553C76.5993 24.188 76.5282 24.3394 76.4976 24.4954L64.7249 15.008L64.7227 15.0057C64.8339 14.8945 64.9402 14.7763 65.0397 14.6509C65.1391 14.5281 65.2339 14.4 65.3211 14.2677L65.3234 14.27Z" fill="#878CF0"/>
<path d="M82.96 30.4585C83.6414 30.7756 83.9489 28.8616 84.4835 28.9538L85.2593 29.5786L87.6134 31.4761C88.07 31.8428 88.1411 32.5147 87.7717 32.9713C87.4027 33.4302 86.7331 33.5009 86.2765 33.1323L84.275 31.5186L83.3569 30.7782L82.96 30.4585Z" fill="#56548C"/>
<path d="M78.2001 23.9032L80.0146 25.3651C79.6858 25.6848 79.8395 26.4795 79.8395 26.4795H79.8372C79.7875 26.5032 79.1133 26.7991 78.7726 27.0569L78.7466 27.0806L76.8633 25.5617C76.539 25.299 76.409 24.8848 76.4942 24.5043C76.5248 24.3479 76.596 24.1969 76.7023 24.0642C76.809 23.9319 76.939 23.8325 77.0832 23.764C77.4407 23.6003 77.8736 23.6405 78.2001 23.9032Z" fill="#56548C"/>
<path d="M35.9463 136.199C38.6602 134.805 38.4044 128.477 38.0021 123.274C38.2365 123.523 38.3948 123.719 38.409 123.809C38.4778 124.209 38.809 127.54 38.6101 131.07C38.4093 134.602 36.9447 136.334 35.9463 136.199Z" fill="#D3DCE0"/>
<path d="M63.3931 152.621C64.4837 151.748 66.4852 146.545 66.9089 144.92C67.1196 145.147 67.2542 145.315 67.2542 145.372C67.2542 145.639 65.4562 150.302 64.7889 151.367C64.1239 152.432 63.457 153.698 61.5924 153.767C59.7259 153.833 57.5657 153.369 57.5821 152.948C59.2265 153.565 62.2478 153.539 63.3931 152.621Z" fill="#D3DCE0"/>
<path d="M64.3226 142.445C64.3226 142.445 66.1326 144.09 66.9085 144.925C66.4851 146.55 64.4833 151.753 63.3926 152.626C62.2473 153.544 59.2264 153.57 57.582 152.952C57.6222 151.835 59.3874 151.537 59.8604 150.839C60.2768 150.222 60.925 145.443 60.925 145.443C64.2565 145.776 64.6209 143.164 64.3226 142.445Z" fill="#56548C"/>
<path d="M37.9967 123.273C38.399 128.476 38.6545 134.805 35.9409 136.198C34.9402 136.066 33.5303 125.873 33.5303 125.873C35.9409 125.142 36.3646 122.104 35.7352 121.172C36.2461 121.617 37.3841 122.625 37.9967 123.273Z" fill="#56548C"/>
<path d="M35.7465 121.167C36.3756 122.099 35.9522 125.137 33.5416 125.868C33.5416 125.868 30.6009 122.688 26.9004 118.604C29.5879 119.74 33.1959 116.428 32.4697 114.838C34.0857 118.296 35.4861 120.939 35.4861 120.939C35.4861 120.939 35.5855 121.025 35.7465 121.167Z" fill="#D3DCE0"/>
<path d="M64.3312 142.446C64.6295 143.165 64.2651 145.777 60.934 145.444C60.934 145.444 59.1784 143.007 56.7275 139.626C56.7275 139.626 60.7447 139.985 61.8047 136.552C63.2926 139.898 64.3312 142.446 64.3312 142.446Z" fill="#D3DCE0"/>
<path d="M35.4648 110.615C36.456 110.496 38.3749 110.158 41.202 109.2C43.0425 108.578 44.2823 107.894 45.0964 107.314C45.0964 107.314 45.2027 107.736 45.371 108.384C44.3653 109.054 40.542 111.334 35.6587 110.968H35.6564C35.5406 110.783 35.4744 110.681 35.4744 110.681L35.4648 110.615Z" fill="#EFAC92"/>
<path d="M27.4097 97.8744L27.3623 97.8935L25.4954 97.9788C26.6617 97.1268 24.9038 91.4324 21.9111 88.7327C24.2748 89.6791 25.796 93.585 26.4938 95.1609C26.8277 95.913 27.1803 96.9425 27.4097 97.8744Z" fill="#EFAC92"/>
<path d="M27.3922 97.8664C27.6855 99.0515 27.7827 100.071 27.3991 100.154C27.3188 100.152 27.276 100.15 27.276 100.15C26.4764 99.9723 25.2603 98.3444 25.0049 97.9918L25.4779 97.9704L27.3448 97.8851L27.3922 97.8664Z" fill="#E5B848"/>
<path d="M54.3277 122.401C56.6015 125.342 59.6604 131.77 61.7922 136.559C60.7322 139.992 56.7151 139.632 56.7151 139.632C51.4674 132.395 43.0308 120.83 41.8029 119.605C40.2201 118.02 36.5246 112.325 35.6611 110.978C40.5444 111.345 44.3677 109.064 45.3734 108.395C45.8655 110.28 46.8873 114.08 47.3324 114.875C47.9324 115.94 50.4643 117.405 54.3277 122.401Z" fill="#FFC8AF"/>
<path d="M25.4716 97.9703L24.9986 97.9917L22.0743 98.1267C25.4055 99.7925 28.0035 104.347 30.2673 109.876C30.9652 111.582 31.7296 113.287 32.4489 114.83V114.832C33.1751 116.422 29.5671 119.734 26.8796 118.599C23.2904 114.636 18.9891 109.822 15.9681 106.235C9.84051 98.95 8.41835 93.2675 10.995 91.2232C11.9273 90.4852 16.0106 89.4867 20.8396 88.5165C21.2063 88.5165 21.5543 88.5923 21.8877 88.7246C24.88 91.4236 26.6379 97.1183 25.4716 97.9703Z" fill="#FFC8AF"/>
<path d="M47.7905 88.2356C47.7477 87.779 47.6861 87.3129 47.6035 86.8372C49.2314 87.3813 50.5843 87.9209 50.7951 88.5144C50.8023 88.6019 50.8092 88.68 50.8165 88.7511V88.7557C50.639 89.4987 47.8425 88.9235 47.8425 88.9235H47.8402C47.8284 88.6968 47.8119 88.4673 47.7905 88.2356Z" fill="#6272CC"/>
<path d="M43.8459 98.387L43.8482 98.3893C41.8915 100.197 36.5707 102.239 30.6771 102.544L29.5322 100.201V100.196C32.1349 100.22 36.5138 100.175 40.1217 99.7185C41.5248 99.5418 42.7787 99.0875 43.8459 98.387Z" fill="#E5B848"/>
<path d="M40.1426 85.1773C40.1426 85.1773 43.8737 85.622 46.2277 86.3765C46.6985 86.528 47.1669 86.6771 47.6166 86.8262C47.6992 87.3016 47.7608 87.7677 47.8036 88.2247C46.1803 86.9329 42.627 86.2301 39.5605 85.2672C39.9368 85.2083 40.1426 85.1773 40.1426 85.1773Z" fill="#E5B848"/>
<path d="M44.2338 98.1248L46.5313 105.944C46.5313 105.944 46.2024 106.538 45.0977 107.321C44.2839 107.901 43.0442 108.584 41.2033 109.206C38.3762 110.164 36.4573 110.503 35.4661 110.621C34.9407 110.687 34.6757 110.687 34.6757 110.687L30.6914 102.539C36.585 102.234 41.9058 100.192 43.8625 98.3845L43.8602 98.3822C43.9879 98.3019 44.1134 98.2143 44.2342 98.1218V98.1248H44.2338Z" fill="#FBD15B"/>
<path d="M47.8377 88.9406C48.0694 93.0977 46.6997 96.3248 44.2247 98.1462C44.1039 98.2387 43.9789 98.3263 43.8508 98.4066C42.7839 99.1068 41.53 99.5611 40.1269 99.7385C36.519 100.195 32.1397 100.24 29.5374 100.217C28.456 100.207 27.6801 100.186 27.3941 100.176C27.7772 100.094 27.6805 99.0739 27.3872 97.8885C27.1577 96.9565 26.8052 95.9271 26.4717 95.1749C25.7738 93.599 24.2526 89.6932 21.889 88.7467C21.5555 88.614 21.2075 88.5387 20.8408 88.5387C21.946 88.3162 23.0909 88.094 24.2454 87.8787C30.7374 86.6649 37.5488 85.6003 39.5457 85.2952C42.6118 86.2581 46.1654 86.9609 47.7887 88.2527C47.8094 88.484 47.8258 88.7135 47.8377 88.9406Z" fill="#FBD15B"/>
<path d="M47.6021 86.8324C47.1524 86.6833 46.6839 86.5345 46.2132 86.3827C43.7054 72.5707 46.8805 57.9163 47.7107 49.3493H47.7317C47.8289 51.1382 48.2357 53.1492 48.9336 54.7649C49.6361 56.3928 50.6323 57.618 51.898 57.8027C51.898 57.8027 49.9367 65.9322 49.8043 71.596C49.6908 76.4651 50.5497 85.9525 50.7932 88.5096C50.5829 87.9158 49.23 87.3762 47.6021 86.8324Z" fill="#7782E5"/>
<path d="M60.2642 56.8286C60.4462 56.8546 60.6286 56.8783 60.8129 56.9043C60.7915 56.9682 60.0959 59.1945 59.6156 58.9318C59.3862 58.8064 59.3223 58.1865 59.3437 57.3777C59.3483 57.1647 59.3579 56.9399 59.3743 56.7054L59.4833 56.7127C59.7391 56.7529 60.0015 56.7907 60.2642 56.8286Z" fill="#7782E5"/>
<path d="M16.3 60.1787C16.0469 60.4296 14.6675 58.8824 14.2109 58.3546C14.3291 58.2698 14.4499 58.1845 14.5681 58.0992L14.5704 58.0969C14.9444 57.8296 15.3157 57.5646 15.6824 57.3046C15.8124 57.5883 15.9237 57.8533 16.0159 58.0996C16.4514 59.2514 16.4962 59.9875 16.3 60.1787Z" fill="#7782E5"/>
<path d="M59.6311 58.9344L51.9038 57.7987C50.6381 57.614 49.6419 56.3888 48.9395 54.7609C52.9237 56.1803 59.3588 57.3799 59.3588 57.3799C59.3378 58.1895 59.4016 58.809 59.6311 58.9344Z" fill="#878CF0"/>
<path d="M21.8833 56.2564L16.2925 60.1719C16.4887 59.9803 16.444 59.2445 16.0088 58.0924C16.0088 58.0924 20.8611 54.6217 21.5425 53.0225C21.6274 54.0469 21.741 55.128 21.8833 56.2564Z" fill="#878CF0"/>
<path d="M15.6686 57.3048C15.4674 56.8624 15.2166 56.3748 14.9137 55.8498C14.0999 54.4349 13.0778 53.1764 12.1906 52.542C12.108 52.4713 12.0296 52.4193 11.9589 52.3883C11.4216 52.064 10.9486 52.0005 10.627 52.3126C10.9157 52.0216 20.1851 42.7234 22.7426 42.4611C22.9223 42.4424 23.1851 42.4351 23.5139 42.4351C21.543 42.8374 21.0321 46.9609 21.5358 53.0296C20.8543 54.6288 16.002 58.0995 16.002 58.0995C15.9098 57.8536 15.7986 57.5886 15.6686 57.3048Z" fill="#9DA6F4"/>
<path d="M61.24 48.4951L61.2377 48.4978C60.3054 49.5861 59.811 52.8059 59.6266 54.3248C59.5345 55.0701 59.4374 55.9359 59.3853 56.7167C59.3689 56.9512 59.3593 57.176 59.3548 57.389C59.3548 57.389 52.9197 56.1894 48.9354 54.7699C48.2375 53.1539 47.8307 51.1428 47.7335 49.3543C47.6035 46.9104 48.0578 44.8875 49.153 44.8806C53.3526 45.8125 61.8484 48.1287 61.8484 48.1287C61.6281 48.1471 61.4247 48.2798 61.24 48.4951Z" fill="#9DA6F4"/>
<path d="M48.4713 44.7249C48.6866 44.7697 48.9183 44.8194 49.1669 44.8741C48.0717 44.881 47.6174 46.9043 47.7474 49.3478H47.7264C46.8958 57.9148 43.7207 72.5692 46.2289 86.3812C43.8748 85.6267 40.1437 85.182 40.1437 85.182C40.1437 85.182 39.938 85.2126 39.5617 85.2719C37.5648 85.577 30.7534 86.6416 24.2614 87.8554C24.2614 87.8554 25.2289 76.0896 24.7795 72.5692C24.2281 68.2657 21.8932 56.2636 21.8932 56.2636C21.7513 55.1351 21.6377 54.054 21.5524 53.0296C21.0484 46.9609 21.5597 42.8374 23.5306 42.4351H23.5352C25.222 42.4351 28.7164 42.6577 32.5943 42.977V44.2263V44.8156C32.5943 44.8156 33.1718 46.0148 35.6157 46.2798C38.0573 46.5471 39.1694 45.3028 39.1694 45.3028L39.3774 43.5946C43.4412 43.9984 47.0277 44.4294 48.4713 44.7249Z" fill="#878CF0"/>
<path d="M43.2727 31.8691C45.5369 32.4014 45.4493 36.3546 44.1621 38.3516C43.1709 39.8892 40.8926 41.9002 39.8941 42.7473C39.8066 42.0563 40.1022 41.4746 40.457 40.9205L40.4593 40.9182C40.748 40.4712 41.0769 40.0452 41.2735 39.5959C41.7633 38.4862 41.3633 37.5519 40.696 37.4193C40.0314 37.2869 38.7867 39.6835 38.5645 39.5508C38.3443 39.4185 38.8769 37.864 38.9217 37.5091C38.9641 37.1542 38.1668 36.3099 38.0322 35.9053C37.8999 35.503 38.3871 33.6885 37.8999 32.7562C37.41 31.8243 32.882 30.5796 32.882 30.5796C30.7054 29.1154 31.905 25.9613 31.905 25.9613L33.5137 27.0282L34.2139 25.4738C35.2785 26.7609 37.1454 27.3831 37.1454 27.3831L37.3676 26.5835C42.7851 28.1831 43.2727 31.8691 43.2727 31.8691Z" fill="#56548C"/>
<path d="M32.5692 42.9649V42.8039C32.5692 42.8039 29.9948 41.8716 29.8174 41.6494C32.1409 42.366 35.3133 42.5412 36.0444 42.1745L32.5714 44.2138H32.5692V42.9649Z" fill="#EFAC92"/>
<path d="M38.6021 40.3768C39.4469 40.6418 40.5115 40.888 41.2874 39.5771C41.0908 40.0269 40.762 40.4525 40.4732 40.8995L40.4709 40.9018C40.4117 40.9374 39.2974 41.6115 38.8243 41.3966C38.3348 41.1764 38.6021 40.3768 38.6021 40.3768Z" fill="#EFAC92"/>
<path d="M32.5894 44.2385L36.0624 42.1991C35.3313 42.5659 32.1589 42.3907 29.8354 41.6741C29.658 41.4516 28.9459 39.0975 30.1455 35.8968C31.3451 32.698 32.8996 30.571 32.8996 30.571C32.8996 30.571 37.428 31.8158 37.9175 32.7477C38.4046 33.68 37.9175 35.4945 38.0498 35.8968C38.1844 36.3014 38.9821 37.1457 38.9392 37.5006C38.8945 37.8554 38.3618 39.4099 38.5821 39.5422C38.8046 39.6749 40.049 37.2784 40.7136 37.4107C41.3809 37.5434 41.7805 38.4776 41.291 39.5873C40.5151 40.8982 39.4501 40.6519 38.6058 40.3869C38.6058 40.3869 38.3385 41.1865 38.828 41.4068C39.301 41.6221 40.4153 40.9475 40.4746 40.912C40.1197 41.4657 39.8241 42.0477 39.9117 42.7387C39.6111 42.9915 39.4264 43.141 39.4264 43.141L39.3698 43.6072L39.1618 45.3153C39.1618 45.3153 38.0498 46.5597 35.6081 46.2924C33.1642 46.0274 32.5868 44.8282 32.5868 44.8282V44.2389L32.5894 44.2385Z" fill="#FFC8AF"/>
<path d="M9.12077 34.0281C8.7919 34.7994 8.54105 35.4075 8.54105 35.4075C7.02673 36.0059 5.97168 37.2908 5.97168 37.2908C5.97168 37.2908 6.08525 36.2923 6.62941 35.6939C7.17128 35.0927 9.12077 34.0281 9.12077 34.0281Z" fill="#EFAC92"/>
<path d="M9.68922 53.2385L7.55273 57.9256C7.55273 57.9256 7.75388 56.726 7.75388 55.1291L9.68922 53.2385Z" fill="#EFAC92"/>
<path d="M14.9213 55.849C15.2242 56.3741 15.4751 56.8616 15.6762 57.3041C15.3095 57.5641 14.9382 57.8291 14.5642 58.0964C15.2315 57.3844 13.2701 53.4426 12.1982 52.5413C13.0854 53.1753 14.1076 54.4338 14.9213 55.849Z" fill="#EFAC92"/>
<path d="M84.4708 28.9585C83.9362 28.8663 83.6287 30.7802 82.9473 30.4632L82.4054 30.0281C84.0451 29.5833 82.8975 28.2063 80.6261 26.9876C80.2758 26.7107 79.9756 26.5122 79.8337 26.4744C79.8337 26.4744 79.68 25.6798 80.0089 25.3601C80.075 25.2916 80.1626 25.2465 80.2762 25.2301C80.9435 25.1425 82.2754 24.7425 83.075 25.2301C83.8746 25.7199 85.7839 27.4514 85.7392 28.251C85.725 28.5092 85.5262 28.994 85.247 29.5833L84.4708 28.9585Z" fill="#FFC8AF"/>
<path d="M61.2424 48.4949C60.1728 50.2975 59.8535 55.2875 60.2795 56.8347V56.837C60.0168 56.7991 59.7541 56.7613 59.4986 56.7211L59.3896 56.7139C59.4417 55.933 59.5388 55.0672 59.6309 54.3219C59.8156 52.8034 60.3105 49.5832 61.2424 48.4949Z" fill="#EFAC92"/>
<path d="M80.6328 26.9961C82.9043 28.2148 84.0515 29.5918 82.4121 30.0366L81.6313 29.4071C81.9483 29.4354 82.2557 29.4071 82.4359 29.258C82.7884 28.9647 81.5437 27.7177 80.6328 26.9961Z" fill="#EFAC92"/>
<path d="M82.9594 30.4581L83.3567 30.7774L81.3315 32.0646C81.8944 30.0727 80.6026 29.1992 80.5342 29.1568C80.5789 29.1709 81.1185 29.3534 81.6366 29.3935L82.4175 30.0229L82.9594 30.4581Z" fill="#EFAC92"/>
<path d="M14.5614 58.0933C14.4432 58.1786 14.3224 58.2639 14.2042 58.3488C10.7714 60.8095 7.17262 63.4118 4.62926 64.1051C1.69776 64.9047 1.03314 63.7716 0.167002 60.2417C-0.67046 56.8253 1.88705 40.9858 2.41706 38.6199L2.46448 38.6294C2.80749 37.3728 3.32106 34.4345 3.89122 33.8054C4.46368 33.1787 5.66098 31.1225 6.46058 30.524C7.26057 29.9256 9.80125 29.3244 10.2295 29.2674C10.6578 29.2105 10.9699 30.0953 10.3714 31.2666C10.0426 31.9079 9.52669 33.0884 9.12479 34.0253C9.12479 34.0253 7.1753 35.0899 6.63343 35.691C6.08927 36.2895 5.9757 37.288 5.9757 37.288C5.9757 37.288 7.03075 36.0031 8.54506 35.4046C8.88808 35.291 9.31637 34.8914 9.80126 34.262C10.2865 33.6349 10.9133 33.6918 11.1144 33.8054C11.3133 33.9213 11.3133 34.5484 10.9699 34.9767C10.6292 35.405 9.71368 36.6046 9.20012 37.6879C8.68655 38.7717 6.48888 39.8573 6.48888 39.8573C5.95658 42.1215 6.76077 45.7199 7.16077 48.3841C7.56076 51.0483 7.76152 55.1129 7.76152 55.1129C7.76152 56.7098 7.56038 57.9094 7.56038 57.9094L9.69686 53.2223L9.69916 53.2177L10.6265 52.3137L10.6334 52.3064C10.955 51.9944 11.4284 52.0579 11.9653 52.3822C12.041 52.4296 12.119 52.4793 12.197 52.5359C13.2689 53.4376 15.2302 57.379 14.5629 58.091L14.5614 58.0933Z" fill="#FFC8AF"/>
<path d="M60.8182 56.911C60.6335 56.885 60.4514 56.8613 60.2694 56.8353V56.833C59.8434 55.2858 60.1627 50.2958 61.2323 48.4932L61.2346 48.4905C61.4193 48.2752 61.6227 48.1429 61.8426 48.1238C65.1286 49.0794 69.392 50.1895 69.392 50.1895C69.392 50.1895 71.0788 44.7265 73.6103 41.5751C76.1418 38.4215 79.0282 32.1589 79.1609 31.8487C79.2959 31.539 78.0963 30.1172 78.0511 29.7172C78.006 29.3268 78.3869 27.4174 78.7349 27.0767L78.7609 27.053C79.1016 26.7953 79.7758 26.4993 79.8255 26.4756H79.8278C79.9697 26.5134 80.2702 26.7123 80.6201 26.9888C81.531 27.7104 82.7757 28.9574 82.4232 29.2507C82.2434 29.3998 81.9356 29.4281 81.6186 29.3998C81.1004 29.3597 80.5609 29.1773 80.5161 29.1631C80.5846 29.2056 81.8763 30.0786 81.3134 32.0709L83.3386 30.7837L84.2568 31.5241C83.8805 32.2575 83.5279 32.9581 83.3367 33.4475C82.8021 34.8246 80.2702 44.2837 78.0064 49.7888C75.7422 55.2965 73.9656 57.516 73.4332 57.7385C72.9407 57.9446 66.3684 57.6559 60.8182 56.911Z" fill="#FFC8AF"/>
</svg>

      </div>
      <img
        className="circle-img"
        src="https://cdni.iconscout.com/illustration/premium/thumb/win-sports-competition-4981299-4145076.png?f=webp"
      />
      <div className="flex-shift justify-content-between  ">
        <div>
          <p>Sports Vision Performance Evaluation</p>
          <h2>Week {data?.week}</h2>
        </div>
        <div>
          <div className="comp">{perc}% complete</div>
        </div>
      </div>
      <div className="progress-stat mt-2">
        <div className="d-flex gap-3">
          <i class="fa-solid fa-play"></i>
          <p>Day {data?.day} </p>
        </div>

        <Progress value={perc} striped color="#FFFFFF" />
      </div>
      <div>
        <div className="start-drill" onClick={()=>{navigate("/a-drill")}}>
          <p>Start Drill</p>
        </div>
      </div>
    </div>
</div>
  )
}

export default Card1