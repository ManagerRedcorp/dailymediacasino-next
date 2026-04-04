"use client";

import React, { useMemo, useState } from "react";

type PromoRefProps = {
  bgImageUrl: string;
  brandLogoUrl: string;

  subtitleBg?: string;
  subtitleText?: string;

  highlightAmount?: string;

  ctaText?: string;
  ctaBg?: string;
  ctaHref: string;

  titleHref?: string;

  shortTerms?: string;
  fullTerms?: string;

  readMoreColor?: string;

  enableToggle?: boolean;
};

export default function PromoBannerExact({
  bgImageUrl,
  brandLogoUrl,

  subtitleBg = "hsl(var(--primary))",
  subtitleText = "Special Offer",

  highlightAmount = "$50",

  ctaText = "Get Bonus",
  ctaBg = "hsl(var(--primary))",
  ctaHref,
  titleHref,

  shortTerms = "21+. T&Cs apply. Gamble responsibly.",
  fullTerms = "21+. T&Cs apply. Gamble responsibly.",

  readMoreColor = "hsl(var(--accent))",
  enableToggle = true,
}: PromoRefProps) {
  const [expanded, setExpanded] = useState(false);

  const dashedBg = useMemo(() => {
    const svg = `<svg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'><rect width='100%25' height='100%25' fill='transparent' stroke='%23FFFFFF' stroke-width='4' stroke-dasharray='13%2c 9' stroke-dashoffset='0'/></svg>`;
    return `url("data:image/svg+xml,${svg}")`;
  }, []);

  const titleLink = titleHref || ctaHref;

  return (
    <section className="promotion-block desktop-show mobile-show">
      <article
        className="review_list_promo_block_wrap"
        aria-label="Check the promo block"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="promo_stretched_link"
          aria-label="Visit promotion"
        />
        <a className="review_list_promo__subtitle promo-gradient-animated">
          <span className="review_list_promo__subtitle-text">
            {subtitleText}
          </span>
        </a>

        <div
          className="review_list_promo_wrap"
          style={{ backgroundImage: dashedBg }}
        >
          <div className="review_list_promo__text">
            <a
              href={titleLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="review_list_promo__title"
            >
              Get<span> 100% Deposit match</span> up to <span>$1000 + $25</span>
            </a>

            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="review_list_promo__cta review_list_promo__cta--custom"
            >
              <span
                className="
      btn-light-sweep inline-flex w-full items-center justify-center
      rounded-full
      gradient-primary
      px-6 py-4
      text-base font-semibold
      text-primary-foreground
      shadow-lg glow-primary
      transition-transform
      hover:scale-[1.02]
      active:scale-[0.98] m
    "
              >
                {ctaText}
              </span>
            </a>

            <div className="js_text_wrap" style={{ color: "#fff" }}>
              {!enableToggle ? (
                <span
                  className="js_text__short show"
                  style={{ color: "inherit" }}
                >
                  {shortTerms}
                </span>
              ) : (
                <>
                  {!expanded ? (
                    <span
                      className="js_text__short show"
                      style={{ color: "inherit" }}
                    >
                      {shortTerms}
                    </span>
                  ) : (
                    <span className="js_text__full show">
                      <span
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {fullTerms}
                      </span>
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="review_list_promo__middle"
            aria-label="Visit brand site"
            style={{ backgroundImage: `url(${brandLogoUrl})` }}
          />
        </div>

        <style>{`
          .promotion-block.desktop-show, .top-promotion-block.desktop-show { display: block; margin:20px 0 }

          .review_list_promo_block_wrap {
            display: flex;
            justify-content: space-between;
            position: relative;
            text-decoration: none;
            border-radius: 16px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            gap: 5px;
            min-height: 162px;
            overflow: hidden;
            transition: 1s cubic-bezier(0.39, 0.58, 0.57, 1) background, box-shadow .2s;
            content-visibility: auto;
          }

          .review_list_promo__subtitle{
            position: relative;
            color: #fff;
            font-size: 14px;
            font-weight: 800;
            line-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 37px;
            min-height: inherit;
            text-decoration: none;
            flex: 0 0 37px;
          }
          .review_list_promo__subtitle .review_list_promo__subtitle-text{
            white-space: nowrap;
            transform: rotate(-90deg);
            color: #fff;
          }

          .promo_stretched_link{
  position: absolute;
  inset: 0;
  z-index: 1;
}

          .review_list_promo_wrap{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            text-decoration: none;
            background-repeat: no-repeat;
            border-radius: 8px;
            padding: 20px 50px;
            width: 95%;
            max-width: 1260px;
            margin: 15px 15px;
            gap: 40px;
            background-position: center;
            background-size: cover;
          }

          .review_list_promo__text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            gap: 10px;
            margin-right: 35px;
          }


          .promo-gradient-animated{
  background: linear-gradient(
    270deg,
    hsl(var(--casino-magenta)),
    hsl(var(--casino-magenta) / 0.85),
    hsl(var(--casino-purple)),
    hsl(var(--casino-cyan))
  );
  background-size: 600% 600%;
  animation: promoGradientShift 6s ease infinite;
}

@keyframes promoGradientShift{
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}


          .review_list_promo__title{
            color: #fff;
            font-size: 24px;
            font-weight: 700;
            white-space: normal;
            line-height: 100%;
            text-align: center;
            text-decoration: none;
            text-transform: capitalize;
            margin-bottom:20px
          }

          .review_list_promo__title span{ color: #34ff3a }

          .review_list_promo__cta{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 48px;
            flex-shrink: 0;
            max-width: 210px;
            width: 100%;
            border: none;
            border-radius: 25px;
            text-transform: uppercase;
            text-decoration: none;
            text-shadow: 0 4px 4px rgba(0, 0, 0, .25);
            font-weight: 700;
            font-size: 20px;
            transition: .3s transform, .3s box-shadow;
            padding: 0 20px;
            white-space: nowrap;
            color: #fff;
          }

          .review_list_promo__text .js_text_wrap{
            font-size: 9px;
            text-align: center;
          }

          .js_text__short.show, .js_text__full.show, .js_showhide_btn.show { display: initial; }
          .js_text__short, .js_text__full, .js_showhide_btn { display: none; }

          .brand_descr_showhide_btn{
            background: rgba(0, 0, 0, 0);
            border: none;
            font-size: 9px;
            padding: 0;
            cursor: pointer;
            margin: 0 0 0 5px;
          }

          .review_list_promo__middle{
  width: 200px;
  height: 90px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 14px;
  overflow: hidden;

  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}

          @media (max-width: 900px){
            .review_list_promo_block_wrap{
              background-position: left center;
            }
            .review_list_promo_wrap{
              padding: 10px 18px;
              gap: 16px;
              width: calc(100% - 15px);
              margin: 12px 10px;
              background-position: center;
            }
            .review_list_promo__text{
              width: 70%;
              margin-right: 0;
              gap: 8px;
            }
            .review_list_promo__title{ font-size: 20px; }
            .review_list_promo__middle{ width: 160px; height: 60px; }
          }

          @media (max-width: 640px){
            .review_list_promo_block_wrap{
              min-height: 210px;
              background-position: 22% center;
            }

            .review_list_promo__subtitle{
              max-width: 34px;
              flex: 0 0 34px;
              font-size: 12px;
            }

            .review_list_promo_wrap{
              width: calc(100% - 10px);
              margin: 10px 8px;
              padding: 14px 14px;
              gap: 10px;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
            }

            .review_list_promo__middle{
              order: 0;
              width: 180px;
              height: 80px;
            }

            .review_list_promo__text{
              order: 1;
              width: 100%;
              margin-right: 0;
              gap: 10px;
            }

            .review_list_promo__title{
              font-size: 18px;
              line-height: 105%;
              padding: 0 6px;
            }

            .review_list_promo__cta{
              height: 44px;
              max-width: 220px;
              font-size: 18px;
            }

            .review_list_promo__text .js_text_wrap{
              font-size: 10px;
              padding: 0 6px;
            }
          }

          @media (max-width: 380px){
            .review_list_promo_block_wrap{ min-height: 220px; }
            .review_list_promo__title{ font-size: 16px; }
            .review_list_promo__cta{ max-width: 200px; }
          }


@media (max-width: 640px){
  .review_list_promo_block_wrap::before{
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;

    background:
      linear-gradient(
        180deg,
        rgba(0,0,0,0.4) 0%,
        rgba(0,0,0,0.4) 45%,
        rgba(0,0,0,0.4) 100%
      );
  }

  .review_list_promo__subtitle,
  .review_list_promo_wrap{
    position: relative;
    z-index: 1;
  }
}



        `}</style>
      </article>
    </section>
  );
}
