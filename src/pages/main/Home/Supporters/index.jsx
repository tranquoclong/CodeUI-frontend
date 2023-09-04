import React from "react";
// import points from "../../../../assets/images/logoCover.png";
function Supporters() {
  return (
    <div className="supporters-section creators-section">
      <div>
        <div class="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div class="absolute inset-x-0 top-0 h-full bg-[url('/images/background-gradient/4-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/4-dark.png')]"></div>
        <div class="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px]"></div>
      </div>
      <h2 className="supporters-section__heading">Supporters</h2>
      <section className="supporters creators">
        <a className="creator" href="/profile/">
          <img
            className="avatar"
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/245404670_615947496201936_748824372943985183_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=fe8171&_nc_ohc=sDEIZN877LcAX-FOS4j&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBcOI5ZD5t9sa5wVIwybkMyXMt0kf0nUxTR_zq-RktTyg&oe=64FA4AA3"
            alt=""
            loading="lazy"
          />
          <span className="username-sup">tranquoclong</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </a>
        <a className="creator" href="/profile/">
          <img
            className="avatar"
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/323459067_840900486990395_2975645660132593752_n.jpg?stp=c0.0.200.200a_cp6_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=fe8171&_nc_ohc=XzhKaXy41gEAX8oD3Yd&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAGuANoa8V0gJmEApYmLVw_3FUmK_DuzV9VAxWKlRkJfA&oe=64FBAD85"
            alt=""
            loading="lazy"
          />
          <span className="username-sup">quannguyen</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </a>
        <a className="creator" href="/profile/">
          <img
            className="avatar"
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/368028777_2506915439471300_3838201504797734039_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=fe8171&_nc_ohc=3d_7x0FI1CwAX8HlfWv&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDtlW87TOzQ8UmhT4NwbMt4zFPMn8-L6Yp_xQkBGcqvxg&oe=64FB4E2F"
            alt=""
            loading="lazy"
          />
          <span className="username-sup">tuanlac</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </a>
        <a className="creator" href="/profile/">
          <img
            className="avatar"
            src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/371336062_2323520914511852_3284956519508362966_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=6e0f69&_nc_ohc=cPy_iJ5gyQsAX83s_y3&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCT_pfz_i1f7w20i67rACHL2U4nu9GzkXMzs_u1Lg5wWw&oe=64F9FF0E"
            alt=""
            loading="lazy"
          />
          <span className="username-sup">nguyenductai</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </a>
      </section>
      <a className="button sup-button" href="/all">
        Become a supporter
      </a>
    </div>
  );
}

export default Supporters;
