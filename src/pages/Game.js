/** @format */

import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { gameStore } from '../stores/gameStore';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';
import { Lights } from '../components/game/Lights';
import { Effect } from '../components/vfx/Effect';

import { Hud } from '../components/hud/Hud';

import { useFullScreen } from '../hooks/windowResize';

function Camera(props) {
	const [ , setGlitching ] = useState(true)
	const [ zooming, setZooming ] = useState(false)
	const ref = useRef()
	const { setDefaultCamera } = useThree()
	
	useEffect(() => { 
		const subs = gameStore.glitching.subscribe(setGlitching);
		setTimeout(() => {gameStore.setGlitching(false)}, 1000)
		setTimeout(() => {setZooming(true)}, 1500)
		setDefaultCamera(ref.current)
		return () => subs.unsubscribe();
	}, [setDefaultCamera])
	
	useFrame(() => {
		if (zooming && ref.current.position.z > 45){
			ref.current.position.z -= 0.75
		} else {
			setZooming(false)
		}
		ref.current.updateMatrixWorld()
	})
	
	return <perspectiveCamera ref={ref} position={[0, 0, 85]} {...props} fov={45} far={157} />
}

export function Game() {
	const [balls, setBalls] = useState(3);
	const [ballLaunched, setBallLaunched] = useState(false);
	const [size, setSize] = useState(0);

	const canvasContainer = useRef(null);

	useFullScreen(canvasContainer, { size, setSize });

	useLayoutEffect(() => {
		const subs = gameStore.balls.subscribe(setBalls);
		subs.add(gameStore.ballLaunched.subscribe(setBallLaunched));
		return () => subs.unsubscribe();
	}, []);

	function handleClick() {
		if (balls < 0) {
			console.log("resetGame")
			gameStore.resetGame();
		} else if (!ballLaunched) {
			console.log("launchBall")
			gameStore.launchBall();
		} else {
			console.log("remove ball")
			setBalls(balls - 1);
		}
	}

	return (
		<>
			<div id="game" onClick={handleClick}>
				<div ref={canvasContainer}>
					<Canvas
						style={{ width: '100%', height: '100%' }}
						shadowMap
					>
						<Camera />
						<Lights />
						<Physics
							iterations={20}
							tolerance={0.0001}
							defaultContactMaterial={{
								friction: 0,
								restitution: 1,
							}}
							gravity={[0, 0, 0]}
							allowSleep={false}
						>
							<Walls />
							<Tiles />
							<Paddle />
							<Ball />
							<Effect />
						</Physics>
					</Canvas>
					<Hud />
				</div>
			</div>
		</>
	);
}
