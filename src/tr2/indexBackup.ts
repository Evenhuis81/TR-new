// import { get2D } from '../canvasAPI';
// import { getMap } from './levels';
// import { getPlayer } from './player';

// let player1: ReturnType<typeof getPlayer>;
// let map: ReturnType<typeof getMap>;
// let context: CanvasRenderingContext2D;

// export const initiate = () => {
//     context = get2D('canvas').context;

//     addEvent();

//     const start = () => {
//         const map = getMap(1, context);

//         player1 = getPlayer(context, map);

//         animate();
//     }

//     return {start};
// }

// const addEvent = () => window.addEventListener('keydown', ({ key }) => {
//     player1.input(key);
// });

// const animate = () => {
//     context.clearRect(0, 0, 400, 400);

//     // map.update();
//     // map.show();

//     // player1.update();
//     // player1.show();

//     requestAnimationFrame(animate);
// };
 