document.addEventListener("DOMContentLoaded", () => {
    const menuPage = document.querySelector("#menu-page");
    const mainPage = document.querySelector("#main-page");

    burgerLogic();
    if (mainPage) {
        slider();
        themeSwitcher();
        initialTheme();
    }

    if (menuPage) {
        createCardsItems();
        switchLogic();
        modal();
        checkLogic();
        refreshCard();
        themeSwitcher();
        initialTheme();
    }
});
const body = document.body;
const scrollWidth = window.innerWidth - body.offsetWidth;
function createCardsItems() {
    const menuContentNode = body.querySelector(".menu-content");
    console.log();
    PRODUCTS.forEach((item) => {
        const card = createCard(item);
        menuContentNode.append(card);
    });
    function createCard(card) {
        const div = document.createElement("div");
        div.dataset.target = card.category;
        div.className = `open-modal card-menu active`;
        const content = `       <div class="card-menu__img">
                                    <img
                                        src="${card.src}"
                                        alt="${card.name}"
                                    />
                                </div>
                                <div class="card-menu__info">
                                    <div class="card-menu__title">
                                        ${card.name}
                                    </div>
                                    <div class="card-menu__subtitle">
                                        ${card.description}
                                    </div>
                                    <div class="card-menu__price">$${card.price}</div>
                                </div>
                            `;
        div.innerHTML = content;
        return div;
    }
}

function createModalContent(titleCard) {
    const productItem = PRODUCTS.find((item) => item.name === titleCard);

    const modal = `
    <div class="modal-img">
        <img src="${productItem.src}" alt="" />
    </div>
    <div class="modal-content">
      <div class="modal-title">
        <h3>${productItem.name}</h3>
        <div class="modal-description">
        ${productItem.description}
          Fragrant black coffee with Jameson Irish whiskey and whipped
          milk
        </div>
      </div>
      <div>
        <div class="modal-switch__title">Size</div>
        <div class="modal-switch switch">
          <div cost=${productItem.sizes.s["add-price"]} class=" cost switch-item active">
            <span>S</span>
            <span>${productItem.sizes.s.size}</span>
          </div>
          <div cost=${productItem.sizes.m["add-price"]} class="cost switch-item">
            <span>L</span>
            <span>${productItem.sizes.m.size}</span>
          </div>
          <div cost=${productItem.sizes.l["add-price"]} class="cost switch-item">
            <span>M</span>
            <span>${productItem.sizes.l.size}</span>
          </div>
        </div>
      </div>
      <div>
        <div class="modal-switch__title">Additives</div>
        <div class="modal-check check">
          <div cost=${productItem.additives[0]["add-price"]} class="cost check-item">
            <span>1</span>
            <span>${productItem.additives[0].name}</span>
          </div>
          <div cost=${productItem.additives[1]["add-price"]} class="cost check-item">
            <span>2</span>
            <span>${productItem.additives[1].name}</span>
          </div>
          <div cost=${productItem.additives[2]["add-price"]} class="cost check-item">
            <span>3</span>
            <span>${productItem.additives[2].name}</span>
          </div>
        </div>
      </div>

      <div class="modal-total">
        <div class="modal-total__word">Total:</div>
        <div class="modal-total__price">$${productItem.price}</div>
      </div>
      <div class="modal-alert">
        <img src="../img/icons/info-empty.svg" alt="alert" />
        <div class="modal-alert__text">
          The cost is not final. Download our mobile app to see the
          final price and place your order. Earn loyalty points and
          enjoy your favorite coffee with up to 20% discount.
        </div>
      </div>
      <div class="modal-close">Close</div>
    </div>
  `;
    return modal;
}
function calcPrice() {
    const modal = document.querySelector(".modal");

    const activeProduct = PRODUCTS.find(
        (item) => item.name === modal.querySelector("h3").innerHTML,
    );

    const elemCost = modal.querySelectorAll(".cost");

    elemCost.forEach((itemClick) => {
        itemClick.addEventListener("click", () => {
            let fullPrice = activeProduct.price;
            elemCost.forEach((item) => {
                if (item.className.includes("active")) {
                    fullPrice =
                        Number(fullPrice) +
                        Number(item.attributes["cost"].value);
                    modal.querySelector(".modal-total__price").innerHTML =
                        `$${fullPrice.toFixed(2)}`;
                }
            });
        });
    });
}
function modal() {
    const openModal = document.querySelectorAll(".open-modal");
    const modalOverlay = document.querySelector(".modal-overlay ");
    const modal = document.querySelector(".modal");

    openModal.forEach((item) => {
        item.addEventListener("click", (e) => {
            modal.classList.add("modal--visible");
            modalOverlay.classList.add("modal-overlay--visible");
            body.style.overflow = "hidden";
            body.style.paddingRight = `${scrollWidth}px`;
            modal.innerHTML = createModalContent(
                item.querySelector(".card-menu__title").outerText,
            );
            window.addEventListener("keydown", addKeydownListener);
            modal
                .querySelector(".modal-close")
                .addEventListener("click", modalClose);

            switchLogic();
            checkLogic();
            calcPrice();
        });
    });

    modalOverlay.addEventListener("click", (e) => {
        if (e.target == modalOverlay) {
            modalClose();
        }
    });
    function addKeydownListener(e) {
        if (e.key === "Escape") {
            modalClose();
        }
    }
    function modalClose() {
        modalOverlay.classList.remove("modal-overlay--visible");
        modal.classList.remove("modal--visible");
        body.style.overflow = "auto";
        body.style.paddingRight = "0px";
        window.removeEventListener("keydown", addKeydownListener);
    }
}

function slider() {
    const blockSlider = document.querySelector(".slicer");
    let wrapper = blockSlider.querySelector(".slicer-wrapper");
    const butNext = blockSlider.querySelector(".slicer-button-next");
    const butPrev = blockSlider.querySelector(".slicer-button-prev");
    const bullets = blockSlider.querySelectorAll(".slicer-bullet");
    const slides = blockSlider.querySelectorAll(".slicer-slide");
    // setInterval(nextSlide, 5000)

    const state = {
        positionWrapper: 0,
        slideActive: 0,
        maxSlide: slides.length - 1,
    };
    let moveSlide;
    slides.forEach((item) => {
        item.style.minWidth = `${wrapper.clientWidth}px`;
    });
    window.addEventListener("resize", () => {
        resizeSlider();
    });

    slides[0].classList.add("slicer-slide-active");

    wrapper.addEventListener(
        "touchstart",
        (eventOne) => {
            moveSlide = eventOne.touches[0].clientX;
        },
        { passive: true },
    );
    wrapper.addEventListener("touchend", (eventTwo) => {
        console.log(moveSlide);
        console.dir(eventTwo.changedTouches[0].clientX);
        if (moveSlide < eventTwo.changedTouches[0].clientX) {
            prevSlide();
        } else if (moveSlide > eventTwo.changedTouches[0].clientX) {
            nextSlide();
        } else {
            console.log("nothing");
        }
        moveSlide = 0;
    });
    wrapper.addEventListener("mousedown", (eventOne) => {
        moveSlide = eventOne.clientX;
    });
    wrapper.addEventListener("mouseup", (eventTwo) => {
        if (moveSlide + 30 < eventTwo.clientX) {
            prevSlide();
        } else if (moveSlide - 30 > eventTwo.clientX) {
            nextSlide();
        } else {
            console.log("nothing");
        }
        moveSlide = 0;
    });

    butNext.addEventListener("click", () => {
        nextSlide();
    });
    butPrev.addEventListener("click", () => {
        prevSlide();
    });
    let timeOutSlide;
    function slideInterval(argCount) {
        let countSec = argCount || 0;
        if (countSec === 0) {
            bullets.forEach((item) => {
                item.querySelector(".bullet-load").style.minWidth = 0;
            });
        }
        clearInterval(timeOutSlide);
        timeOutSlide = setInterval(() => {
            countSec++;
            bullets[state.slideActive].querySelector(
                ".bullet-load",
            ).style.minWidth = `${countSec}px`;

            slides.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    clearInterval(timeOutSlide);
                });
                item.addEventListener("mouseleave", () => {
                    slideInterval(countSec);
                });

                item.addEventListener(
                    "touchstart",
                    () => {
                        clearInterval(timeOutSlide);
                    },
                    { passive: true },
                );
                item.addEventListener("touchend", () => {
                    slideInterval(countSec);
                });
            });

            if (countSec >= 40) {
                clearInterval(timeOutSlide);
                nextSlide();
            }
        }, 125);
        // return timeOut;
    }
    slideInterval();
    function resizeSlider() {
        wrapper = blockSlider.querySelector(".slicer-wrapper");
        slides.forEach((item) => {
            item.style.minWidth = `${wrapper.clientWidth}px`;
        });
        state.positionWrapper = -(wrapper.clientWidth * state.slideActive);
        wrapper.style.transform = `translate(${state.positionWrapper}px, 0)`;
    }
    function nextSlide() {
        if (state.slideActive + 1 > state.maxSlide) {
            state.slideActive = 0;
            state.positionWrapper = 0;
        } else {
            state.slideActive++;
            state.positionWrapper = -(wrapper.clientWidth * state.slideActive);
        }
        console.log(`work slider ${state.positionWrapper}`);
        wrapper.style.transform = `translate(${state.positionWrapper}px, 0)`;

        activeSlide(state.slideActive);
        activeBullet(state.slideActive);
        clearInterval(timeOutSlide);
        slideInterval();
    }

    function prevSlide() {
        if (state.slideActive === 0) {
            state.slideActive = state.maxSlide;
            state.positionWrapper = -wrapper.clientWidth * state.maxSlide;
        } else {
            state.slideActive = state.slideActive - 1;
            state.positionWrapper = -wrapper.clientWidth * state.slideActive;
        }

        // state.slideActive = state.slideActive - 1;
        wrapper.style.transform = `translate(${state.positionWrapper}px, 0)`;

        activeSlide(state.slideActive);
        activeBullet(state.slideActive);
        clearInterval(timeOutSlide);
        slideInterval();
    }
    function activeSlide(index) {
        slides.forEach((item) => item.classList.remove("slicer-slide-active"));
        slides[index].classList.add("slicer-slide-active");
    }
    function activeBullet(index) {
        bullets.forEach((item) => item.classList.remove("active"));
        bullets[index].classList.add("active");
    }
}

function burgerLogic() {
    const burger = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burger-menu");

    burgerMenu.querySelectorAll(".underline-hover").forEach((item) => {
        item.addEventListener("click", () => {
            closeBurger();
        });
    });
    burgerMenu.querySelector(".menu-link").addEventListener("click", () => {
        closeBurger();
    });
    burger.addEventListener("click", () => {
        console.log("burger 3");
        if (burger.className.includes("active")) {
            closeBurger();
        } else {
            openBurger();
        }
    });
    function resizeWindow() {
        if (window.innerWidth > 769) {
            closeBurger();
        }
    }
    function closeBurger() {
        burger.classList.remove("active");
        burgerMenu.classList.remove("active");
        body.style.overflow = "auto";
        body.style.paddingRight = "0px";
        window.removeEventListener("resize", resizeWindow);
    }
    function openBurger() {
        window.addEventListener("resize", resizeWindow);
        burger.classList.add("active");
        burgerMenu.classList.add("active");

        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollWidth}px`;
    }
}
function switchLogic() {
    const switchs = document.querySelectorAll(".switch");
    switchs.forEach((item) => {
        const switchItems = item.querySelectorAll(".switch-item");

        let prevSwitchItem = switchItems[0];
        switchItems.forEach((switchItem) => {
            switchItem.addEventListener("click", () => {
                prevSwitchItem.classList.remove("active");
                switchItem.classList.add("active");

                if (item.className.includes("menu-switch")) {
                    switchMenu(item, switchItem);
                    refreshCard();
                }

                prevSwitchItem = switchItem;
            });
        });
    });
    function switchMenu(item, switchItem) {
        const switchCards = document
            .querySelector(".menu-content")
            .querySelectorAll(".card-menu");

        switchCards.forEach((cardItem) => {
            cardItem.classList.remove("active");

            if (
                switchItem.attributes["data-path"].value ===
                cardItem.attributes["data-target"].value
            )
                cardItem.classList.add("active");
        });
    }
}
function checkLogic() {
    const checkBlock = document.querySelector(".check");
    const checkItems = checkBlock.querySelectorAll(".check-item");
    // let prevCheckItem = checkItems[0].classList.add("active");
    checkItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
}

function refreshCard() {
    let trueWindow = false;
    if (window.innerWidth <= 768) {
        resizer(true);
    } else {
        resizer(false);
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            trueWindow = true;
        } else {
            trueWindow = false;
        }
        resizer(trueWindow);
    });

    function resizer(trueWindow) {
        const butRefreshCtn = document.querySelector(
            ".menu-content__refresh-container",
        );
        const butRefresh = butRefreshCtn.querySelector(
            ".menu-content__refresh",
        );
        const cards = document.querySelectorAll(".card-menu");
        if (trueWindow) {
            butRefreshCtn.style.display = "flex";

            let countCards = 0;
            cards.forEach((item) => {
                if (item.className.includes("active")) {
                    countCards++;
                    if (countCards > 4) {
                        item.classList.add("disActive");
                    }
                }
            });
            if (countCards <= 4) {
                butRefreshCtn.style.display = "none";
            }
            butRefresh.addEventListener("click", () => {
                cards.forEach((item) => {
                    if (item.className.includes("active")) {
                        item.classList.remove("disActive");
                        butRefreshCtn.style.display = "none";
                    }
                });
            });
        } else {
            butRefreshCtn.style.display = "none";
            cards.forEach((item) => {
                if (item.className.includes("active")) {
                    item.classList.remove("disActive");
                }
            });
        }
    }
}

function themeSwitcher() {
    const body = document.querySelector("body");
    const themeContainer = document.querySelector(".theme");
    const buttonSun = themeContainer.querySelector(".theme-sun");
    const buttonMoon = themeContainer.querySelector(".theme-moon");
    buttonMoon.addEventListener("click", () => {
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    });
    buttonSun.addEventListener("click", () => {
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "sun");
    });
}
function initialTheme() {
    const body = document.querySelector("body");
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        body.classList.add("dark-theme");
    }
}
