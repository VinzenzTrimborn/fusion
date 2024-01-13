import {
    Spherical,
    Vector3, Vector2,
    Euler
} from 'three';

const _lookDirection = new Vector3();
const _zoomPointer = new Vector2();
const _zoomDelta = new Vector2();
const _spherical = new Spherical();
const _target = new Vector3();
const _PI_2 = Math.PI / 2;

export default class BimmyControls {
    constructor(object, domElement) {
        this.object = object;
        this.domElement = domElement;

        // API
        this.enabled = true;

        this.lookAt = function (x, y, z) {
            if (x.isVector3) {
                _target.copy(x);
            } else {
                _target.set(x, y, z);
            }
            this.object.lookAt(_target);
            setOrientation(this);
            return this;
        };

        this.setPosition = function (x, y, z) {
            this.object.position.set(x, y, z);
            return this;
        };

        // internals
        this.movementSpeed = 4.5 * 0.01;
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians
        this.mouseInScene = true;
        this.movementX = 0;
        this.movementY = 0;
        this.pointerSpeed = 1.0;
        this.pointerLooked = false;

        this._euler = new Euler(0, 0, 0, 'YXZ');
        this._vector = new Vector3();

        this.mouseDragOn = false;
        this.rightButtonDragOn = false;
        this.leftButtonDragOn = false;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.zoomOn = false;
        this.scrollOn = false;

        this.onChangeFunc = [];

        this.change = function () {
            this.onChangeFunc.map(f => f())
        }

        this.onMouseDown = function (eventData) {
            this.mouseDragOn = true;
            this.rightButtonDragOn = eventData.button === 2;
            this.leftButtonDragOn = eventData.button === 0;
        };

        this.onMouseUp = function () {
            this.mouseDragOn = false;
            this.rightButtonDragOn = false;
            this.leftButtonDragOn = false;
            document.exitPointerLock();
            this.pointerLooked = false;
        };

        this.onMouseMove = function (event) {
            this.movementX = this.mouseDragOn ? event.movementX || 0 : 0;
            this.movementY = this.mouseDragOn ? event.movementY || 0 : 0;
            if (this.mouseDragOn && event.movementX) {
                if (!this.pointerLooked) {
                    try {
                        this.domElement.requestPointerLock();
                        this.pointerLooked = true;
                    } catch (e) {
                        console.error("Can not request pointer lock.")
                    }
                }
                this.change();
            } else if (!this.mouseDragOn) {
                document.exitPointerLock();
                this.pointerLooked = false;
            }
        };

        this.onMouseWheel = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (!this.mouseInScene || !this.enabled) return false;

            _zoomDelta.x = event.deltaX;
            _zoomDelta.y = event.deltaY;

            if (event.ctrlKey) {
                _zoomPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
                _zoomPointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
                this.zoomOn = true;
            } else {
                this.scrollOn = true;
            }
            this.change();
        };

        this.onMouseEnter = function () {
            this.mouseInScene = true;
        }

        this.onMouseLeave = function () {
            this.mouseInScene = false;
            this.mouseDragOn = false;
            this.rightButtonDragOn = false;
            this.leftButtonDragOn = false;
            document.exitPointerLock();
            this.pointerLooked = true;
        }

        this.onKeyDown = function (event) {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.moveForward = true;
                    this.change();
                    break;

                case 'ArrowLeft':
                case 'KeyA':
                    this.moveLeft = true;
                    this.change();
                    break;

                case 'ArrowDown':
                case 'KeyS':
                    this.moveBackward = true;
                    this.change();
                    break;

                case 'ArrowRight':
                case 'KeyD':
                    this.moveRight = true;
                    this.change();
                    break;

                case 'Space':
                case 'BracketRight':
                case 'KeyQ':
                    this.moveUp = true;
                    this.change();
                    break;

                case 'Slash':
                case 'KeyE':
                    this.moveDown = true;
                    this.change();
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.superman = true;
                    this.change();
                    break;
                default:
                    break;
            }
        };

        this.onKeyUp = function (event) {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.moveForward = false;
                    break;

                case 'ArrowLeft':
                case 'KeyA':
                    this.moveLeft = false;
                    break;

                case 'ArrowDown':
                case 'KeyS':
                    this.moveBackward = false;
                    break;

                case 'ArrowRight':
                case 'KeyD':
                    this.moveRight = false;
                    break;

                case 'Space':
                case 'BracketRight':
                case 'KeyQ':
                    this.moveUp = false;
                    break;

                case 'Slash':
                case 'KeyE':
                    this.moveDown = false;
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.superman = false;
                    break;
                default:
                    break;
            }
        };

        this.moveForwardFunc = function (distance) {
            // move forward parallel to the xz-plane
            // assumes camera.up is y-up
            this._vector.setFromMatrixColumn(this.object.matrix, 0);
            this._vector.crossVectors(this.object.up, this._vector);
            this.object.position.addScaledVector(this._vector, distance);
        };

        this.moveRightFunc = function (distance) {
            this._vector.setFromMatrixColumn(this.object.matrix, 0);
            this.object.position.addScaledVector(this._vector, distance);
        };

        this.moveUpDown = function (distance) {
            this.object.position.addScaledVector(new Vector3(0, 1, 0), distance);
        };

        this.update = function () {
            if (!this.mouseInScene || !this.enabled) return false;
            const actualMoveSpeed = this.movementSpeed * (this.superman ? 20 : 10);

            if (this.moveForward) this.moveForwardFunc(actualMoveSpeed)
            if (this.moveBackward) this.moveForwardFunc(-actualMoveSpeed);

            if (this.moveLeft) this.moveRightFunc(-actualMoveSpeed);
            if (this.moveRight) this.moveRightFunc(actualMoveSpeed);

            if (this.moveUp) this.moveUpDown(actualMoveSpeed);
            if (this.moveDown) this.moveUpDown(-actualMoveSpeed);

            if (this.leftButtonDragOn) {
                this._euler.setFromQuaternion(this.object.quaternion);

                this._euler.y -= this.movementX * 0.016 * this.pointerSpeed;
                this._euler.x -= this.movementY * 0.016 * this.pointerSpeed;

                this._euler.x = Math.max(_PI_2 - this.maxPolarAngle, Math.min(_PI_2 - this.minPolarAngle, this._euler.x));

                this.object.quaternion.setFromEuler(this._euler);
            } else if (this.rightButtonDragOn) {
                this.moveRightFunc(-this.movementX * 0.02 * this.pointerSpeed);
                this.moveForwardFunc(this.movementY * 0.02 * this.pointerSpeed);
            }

            if (this.zoomOn) {
                this.object.translateX(-_zoomPointer.x * _zoomDelta.x * 0.08);
                this.object.translateY(-_zoomPointer.y * _zoomDelta.y * 0.08);
                this.object.translateZ(_zoomDelta.y * 0.05);
                this.zoomOn = false;
            }
            if (this.scrollOn) {
                this.moveForwardFunc(-_zoomDelta.y * 0.015);
                this.moveRightFunc(-_zoomDelta.x * 0.015);
                this.scrollOn = false;
            }

            if (this.scrollOn || this.zoomOn || this.moveForward || this.moveBackward || this.moveLeft || this.moveRight || this.moveUp || this.moveDown || this.movementX || this.movementY) {
                this.change();
            }
        };

        this.addCallback = function (callback) {
            this.onChangeFunc.push(callback);
        }

        this.removeCallback = function (callback) {
            this.onChangeFunc.splice(this.onChangeFunc.indexOf(callback), 1);
        }

        this.dispose = function () {
            this.domElement.removeEventListener('contextmenu', contextmenu);
            this.domElement.removeEventListener('mousedown', _onMouseDown);
            this.domElement.removeEventListener('mousemove', _onMouseMove);
            this.domElement.removeEventListener('wheel', _onMouseWheel);
            this.domElement.removeEventListener('mouseup', _onMouseUp);
            this.domElement.removeEventListener('mouseenter', _onMouseEnter);
            this.domElement.removeEventListener('mouseleave', _onMouseLeave);

            window.removeEventListener('keydown', _onKeyDown);
            window.removeEventListener('keyup', _onKeyUp);
        };

        const _onMouseMove = this.onMouseMove.bind(this);
        const _onMouseWheel = this.onMouseWheel.bind(this);
        const _onMouseDown = this.onMouseDown.bind(this);
        const _onMouseUp = this.onMouseUp.bind(this);
        const _onKeyDown = this.onKeyDown.bind(this);
        const _onKeyUp = this.onKeyUp.bind(this);
        const _onMouseEnter = this.onMouseEnter.bind(this);
        const _onMouseLeave = this.onMouseLeave.bind(this);

        this.domElement.addEventListener('contextmenu', contextmenu);
        this.domElement.addEventListener('mousemove', _onMouseMove);
        this.domElement.addEventListener('wheel', _onMouseWheel);
        this.domElement.addEventListener('mousedown', _onMouseDown);
        this.domElement.addEventListener('mouseup', _onMouseUp);
        this.domElement.addEventListener('mouseenter', _onMouseEnter);
        this.domElement.addEventListener('mouseleave', _onMouseLeave);

        window.addEventListener('keydown', _onKeyDown);
        window.addEventListener('keyup', _onKeyUp);

        function setOrientation(controls) {
            const quaternion = controls.object.quaternion;

            _lookDirection.set(0, 0, -1).applyQuaternion(quaternion);
            _spherical.setFromVector3(_lookDirection);
        }

        setOrientation(this);
    }

}

function contextmenu(event) {
    event.preventDefault();
}
