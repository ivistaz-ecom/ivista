import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const ScrollAnimation = () => {

    document.addEventListener('scroll', function() {
        const progressBar = document.querySelector('.KW_progressBar');
        const scrollPosition = window.scrollY;
        const stopPoint = 300; // Adjust this value to where you want the line to stop (in pixels)
        
        // Calculate the scroll percentage relative to the stop point
        let scrollPercentage = (scrollPosition / stopPoint) * 100;
        
        // Limit the height to a maximum of 100% until the stop point is reached
        if (scrollPercentage > 100) {
            scrollPercentage = 100;
        }
    
        // Update height of progress bar (scaled to max 70% if desired)
        const maxHeightPercentage = 20; // Change to 100 if you want full height
        progressBar.style.height = (scrollPercentage / 100) * maxHeightPercentage + '%';
    });

    
    const nodesRef = useRef([]);
    const myNodesRef = useRef([]);

    useEffect(() => {
        const nodes1 = Array.from(document.getElementsByClassName("timeline-badge"));
        const nodes2 = Array.from(document.getElementsByClassName("timeline-panel"));
        const nodes3 = Array.from(document.getElementsByClassName("timeline-panel-img"));
        const nodes = nodes1.concat(nodes2, nodes3);
        nodesRef.current = nodes;

        const nodes4 = Array.from(document.getElementsByClassName("p.fs-20.fw-bold"));
        myNodesRef.current = nodes;

        const cache = {
            viewport: {},
            rects: []
        };

        function init() {
            recache();
            document.addEventListener("scroll", throttle(scrollCheck, 10));
            window.addEventListener("resize", debounce(recache, 50));
        }

        function recache() {
            cache.viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            nodes.forEach((node, i) => {
                cache.rects[i] = rect(node);
            });
            scrollCheck();
        }

        function scrollCheck() {
            const offset = getScrollOffset();
            const midline = cache.viewport.height * 0.3; 
            cache.rects.forEach((rect, i) => {
                nodesRef.current[i].classList.toggle("active", rect.y - offset.y < midline);
                myNodesRef.current[i].classList.toggle("animation", rect.y - offset.y < midline);
            });

            // Progress bar logic
            const wintop = $(window).scrollTop();
            const docheight = $('article').height();
            const winheight = $(window).height();
            const totalScroll = (wintop / (docheight - winheight)) * 100;
            $(".KW_progressBar").css("height", totalScroll + "%");
        }

        function getScrollOffset() {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        }

        function throttle(fn, limit, context) {
            let wait;
            return function () {
                context = context || this;
                if (!wait) {
                    fn.apply(context, arguments);
                    wait = true;
                    return setTimeout(function () {
                        wait = false;
                    }, limit);
                }
            };
        }

        function debounce(fn, limit, u) {
            let e;
            return function () {
                const i = this;
                const o = arguments;
                const a = u && !e;
                clearTimeout(e);
                (e = setTimeout(function () {
                    (e = null), u || fn.apply(i, o);
                }, limit));
                a && fn.apply(i, o);
            };
        }

        function rect(e) {
            const o = getScrollOffset();
            const r = e.getBoundingClientRect();
            return {
                x: r.left + o.x,
                y: r.top + o.y
            };
        }

        init();

        // Clean up event listeners
        return () => {
            document.removeEventListener("scroll", throttle);
            window.removeEventListener("resize", debounce);
        };
    }, []);

    return (
        <div class="KW_progressContainer">
            <div class="KW_progressBar">
            </div>
        </div>
    ); // This component doesn't render anything visible
};

export default ScrollAnimation;


// import React, { useEffect, useRef } from 'react'

// const ScrollAnimation = () => {
//     const nodesRef = useRef([]);

//     const myNodesRef = useRef([]);

//     useEffect(() => {
//         const nodes1 = Array.from(document.getElementsByClassName("timeline-badge"));
//         const nodes2 = Array.from(document.getElementsByClassName("timeline-panel"));
//         const nodes3 = Array.from(document.getElementsByClassName("timeline-panel-img"));
//         const nodes = nodes1.concat(nodes2, nodes3);
//         nodesRef.current = nodes;

//         const nodes4 = Array.from(document.getElementsByClassName("p.fs-20.fw-bold"));
//         myNodesRef.current = nodes;

//         const cache = {
//             viewport: {},
//             rects: []
//         };

//         function init() {
//             recache();
//             document.addEventListener("scroll", throttle(scrollCheck, 10));
//             window.addEventListener("resize", debounce(recache, 50));
//         }

//         function recache() {
//             cache.viewport = {
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//             nodes.forEach((node, i) => {
//                 cache.rects[i] = rect(node);
//             });
//             scrollCheck();
//         }

//         function scrollCheck() {
//             const offset = getScrollOffset();
//             const midline = cache.viewport.height * 0.5;
//             cache.rects.forEach((rect, i) => {
//                 nodesRef.current[i].classList.toggle("active", rect.y - offset.y < midline);
//                 myNodesRef.current[i].classList.toggle("animation", rect.y - offset.y < midline);
//             });
//         }

//         function getScrollOffset() {
//             return {
//                 x: window.pageXOffset,
//                 y: window.pageYOffset
//             };
//         }

//         function throttle(fn, limit, context) {
//             let wait;
//             return function () {
//                 context = context || this;
//                 if (!wait) {
//                     fn.apply(context, arguments);
//                     wait = true;
//                     return setTimeout(function () {
//                         wait = false;
//                     }, limit);
//                 }
//             };
//         }

//         function debounce(fn, limit, u) {
//             let e;
//             return function () {
//                 const i = this;
//                 const o = arguments;
//                 const a = u && !e;
//                 clearTimeout(e);
//                 (e = setTimeout(function () {
//                     (e = null), u || fn.apply(i, o);
//                 }, limit));
//                 a && fn.apply(i, o);
//             };
//         }

//         function rect(e) {
//             const o = getScrollOffset();
//             const r = e.getBoundingClientRect();
//             return {
//                 x: r.left + o.x,
//                 y: r.top + o.y
//             };
//         }

//         init();

//         // Clean up event listeners
//         return () => {
//             document.removeEventListener("scroll", throttle);
//             window.removeEventListener("resize", debounce);
//         };
//     }, []);
//     return (
//         <div>

//         </div>
//     )
// };

// export default ScrollAnimation
