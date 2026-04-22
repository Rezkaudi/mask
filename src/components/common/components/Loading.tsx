/**
 * Loading Component - Optimized for Performance
 *
 * WHY INLINE STYLES INSTEAD OF CSS MODULE:
 * The CSS module (Loading.module.css) was being bundled into a separate chunk
 * that became render-blocking (~1.2KB, 480ms delay on mobile).
 *
 * By inlining the styles directly in the component using a <style> tag with
 * dangerouslySetInnerHTML, we:
 * 1. Eliminate the render-blocking CSS request entirely
 * 2. The loading spinner only appears during Suspense, so it doesn't affect FCP/LCP
 * 3. Reduce total CSS chunks from 3 to 2
 * 4. Works in Server Components (no styled-jsx dependency)
 */

const loaderStyles = `
.hadis-loader {
    box-sizing: border-box;
    border-top: 7px solid #555;
    border-right: 7px solid transparent;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: hadis-rotation 1s linear infinite;
    display: inline-block;
    position: relative;
}
.hadis-loader::after {
    content: "";
    box-sizing: border-box;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #ff3d00;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: hadis-rotation 0.5s linear infinite reverse;
    position: absolute;
    top: 0;
    left: 0;
}
@keyframes hadis-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

const Loading = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: loaderStyles }} />
      <section className="w-full h-[calc(100vh-60px)] flex items-center justify-center">
        <span className="hadis-loader"></span>
      </section>
    </>
  );
};

export default Loading;
