<template>
  <div>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style>

:root {
  --white10: #E7E7E7;
  --white20: #EAEAEA;
  --white30: #EDEDED;
  --white40: #EFEFEF;
  --white50: #F2F2F2;
  --white60: #F5F5F5;
  --white70: #F7F7F7;
  --white80: #FAFAFA;
  --white90: #FFFFFFE6;
  --white: #fff;
  --black10: #CECECE;
  --black20: #B7B7B7;
  --black30: #A1A1A1;
  --black40: #898989;
  --black50: #727272;
  --black60: #5C5C5C;
  --black70: #454545;
  --black80: #2E2E2E;
  --black90: #171717;
  --black: #000;
  --violet10: #E4E3E4;
  --violet20: #CEBEDD;
  --violet30: #C3ABDA;
  --violet40: #B796D5;
  --violet50: #AB82D1;
  --violet60: #9F70CF;
  --violet70: #955CCB;
  --violet80: #8948C7;
  --violet90: #7E35C3;
  --violet100: #7221BF;
  --violet110: #731DC3;
  --violet120: #7117C7;
  --violet130: #6A0EC2;
  --violet140: #6704C5;
  --violet150: #5B03AF;
  --violet160: #500696;
  --violet170: #5604A4;
  --violet180: #4B058E;
  --violet190: #460682;
  --violet200: #340066;
  --green10: #CFD9D1;
  --green20: #BACCBD;
  --green30: #A5C0AA;
  --green40: #8FB395;
  --green50: #79A680;
  --green60: #659A6D;
  --green70: #4F8E59;
  --green80: #3A8145;
  --green90: #247531;
  --green100: #0F681D;
  --green110: #035310;
  --green120: #044E10;
  --green130: #03450E;
  --green140: #03460E;
  --green150: #033D0C;
  --green160: #02330A;
  --green170: #022B09;
  --green180: #022B08;
  --green190: #022607;
  --green200: #011D05;
  --orange10: #E7DFCE;
  --orange20: #E9D7B7;
  --orange30: #EDD1A1;
  --orange40: #EEC989;
  --orange50: #F0C272;
  --orange60: #F3BD5C;
  --orange70: #F5B645;
  --orange80: #F8AF2E;
  --orange90: #FAA817;
  --orange100: #FCA100;
  --orange110: #F59D00;
  --orange120: #EF9900;
  --orange130: #E79300;
  --orange140: #D48700;
  --orange150: #D08500;
  --orange160: #C47E00;
  --orange170: #BE7A00;
  --orange180: #B77500;
  --orange190: #B47300;
  --orange200: #AF7000;

  --header-height: 118px;
  --footer-height: 420px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

.content-width {
  padding: 0 16px;
  height: 100%;
}

main {
  padding-top: calc(var(--header-height) + 11px);
  min-height: calc(100vh - var(--footer-height));
  padding-bottom: 20px;
}

.main-content {
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
}

.center {
  text-align: center;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: Degular, sans-serif;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.01em;
}

.h1 {
  font-size: 60px;
  line-height: 60px;
}

.h2 {
  font-size: 30px;
  line-height: 35px;
}

.h3 {
  font-size: 24px;
  line-height: 30px;
}

.h4 {
  font-size: 20px;
  line-height: 20px;
}

.h5 {
  font-size: 18px;
  line-height: 20px;
}

.h6 {
  font-size: 20px;
  line-height: 30px;
}

p,
a {
  font-family: Oxygen, sans-serif;
  font-style: normal;
  letter-spacing: 0.01em;
  text-decoration: none;
}

.bold18 {
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
}

.regular18 {
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
}

.bold16 {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.regular16 {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.bold14 {
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
}

.regular14 {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

.bold12 {
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
}

.regular12 {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
}

.uppercase {
  text-transform: uppercase;
}

svg {
  height: 100%;
  width: 100%;
}

.photo-container {
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo {
  border-radius: 8px;
}

.cover {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.contain {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.content__text {
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
}

.content__title {
  font-size: 30px;
  line-height: 35px;
}

.centered-small-container {
  max-width: 664px;
  padding: 0 16px;
  margin: 0 auto;
}

.gallery {
  padding: 15px 0;
  display: grid;
  grid-gap: 30px;
  justify-content: center;
}

.card {
  border-radius: 8px;
  background: var(--white);
}

.accent-text {
  color: var(--violet100);
}

.muted60 {
  color: var(--black60);
}

.muted70 {
  color: var(--black70);
}

.shadow20 {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.shadow50 {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);
}

.button-orange {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  padding: 4px 24px;
  border-radius: 50px;
  background-color: var(--orange100);
  transition: transform 0.2s ease;
  cursor: pointer;
}
.button-text {
  color: var(--white);
}
.button-icon {
  height: 32px;
  width: 32px;
}
.button-orange:hover {
  transform: scale(1.1);
}

@media screen and (min-width: 768px) {
  .content-width {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 0 50px;
    height: 100%;
  }

  main {
    padding-top: calc(var(--header-height) + 50px);
    min-height: calc(100vh - var(--footer-height));
    padding-bottom: 50px;
  }

  .main-content {
    gap: 50px;
  }

  .h1 {
    font-size: 90px;
    line-height: 83px;
  }

  .h2 {
    font-size: 45px;
    line-height: 55px;
  }

  .h4 {
    font-size: 40px;
    line-height: 35px;
  }

  .h5 {
    font-size: 18px;
    line-height: 20px;
  }

  .h7 {
    font-size: 80px;
    line-height: 87px;
  }

  .bold18 {
    line-height: 20px;
  }

  .regular18 {
    line-height: 29px;
  }

  .bold14 {
    line-height: 20px;
  }

  .regular14 {
    line-height: 20px;
  }

  .content__text {
    gap: 20px;
  }

  .content__title {
    font-size: 45px;
    line-height: 55px;
  }

  :root {
    --footer-height: 145px;
  }
}

</style>
