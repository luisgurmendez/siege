import { Rectangle } from "@/objects/shapes";
import { Collisions } from "@/controllers/CollisionsController";
import BaseObject from "@/objects/baseObject";
// import Keyboard from "./keyboard";
import Camera from "./camera";
import SpatiallyHashedObjects from "@/utils/spatiallyHashedObjects";
import Background from "@/objects/background";

class GameContext {
  readonly collisions: Collisions;
  readonly spatialHashing: SpatiallyHashedObjects;
  readonly isPaused: boolean;
  readonly dt: number;
  readonly objects: BaseObject[];
  // readonly pressedKeys: Keyboard;
  readonly canvasRenderingContext: CanvasRenderingContext2D;
  readonly camera: Camera;
  readonly worldDimensions: Rectangle;
  // readonly background: Background;
  // readonly castle: Rectangle;


  pause: () => void;
  unPause: () => void;

  constructor(
    collisions: Collisions,
    spatialHashing: SpatiallyHashedObjects,
    dt: number,
    isPaused: boolean,
    objects: BaseObject[],
    // background: Background,
    // pressedKeys: Keyboard,
    canvasRenderingContext: CanvasRenderingContext2D,
    camera: Camera,
    worldDimensions: Rectangle,
    pause: () => void,
    unPause: () => void
  ) {
    this.collisions = collisions;
    this.spatialHashing = spatialHashing;
    this.dt = dt;
    this.isPaused = isPaused;
    this.objects = objects;
    // this.background = background;
    // this.pressedKeys = pressedKeys;
    this.canvasRenderingContext = canvasRenderingContext;
    this.camera = camera;
    this.worldDimensions = worldDimensions;
    this.pause = pause;
    this.unPause = unPause;
  }
}

export default GameContext;
