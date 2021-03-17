/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { WaveGroup } from "../wave/waveGroup";

const Canvas = ({ waveAmp }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let stageWidth = document.body.clientWidth;
        let stageHeight = document.body.clientHeight * 0.4;
        const waveGroup = new WaveGroup(
            stageWidth,
            stageHeight,
            5,
            waveAmp === undefined ? 300 : waveAmp
        );
        let animationFrameId;

        //resize
        const resize = () => {
            stageWidth = document.body.clientWidth;
            stageHeight = document.body.clientHeight * 0.4;

            //레티나 디스플레이를 위해서
            canvas.width = stageWidth * 2;
            canvas.height = stageHeight * 2;
            ctx.scale(2, 2);

            if (waveGroup !== undefined) {
                waveGroup.resize(stageWidth, stageHeight);
            }
        };
        resize();

        //animate
        const draw = () => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            waveGroup.draw(ctx);
            animationFrameId = window.requestAnimationFrame(draw);
        };
        draw();

        //events
        window.addEventListener("resize", resize);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [waveAmp]);

    return <canvas css={canvasStyle} ref={canvasRef} />;
};

const canvasStyle = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: transparent;
    width: 100%;
    height: 60vh;
`;

export default Canvas;
