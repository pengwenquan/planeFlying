import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bg')
export class Bg extends Component {

  @property(Node)
  bg01: Node = null;
  @property(Node)
  bg02: Node = null;
  @property()
  speed: number = 100;
  start() {

  }

  update(deltaTime: number) {
    const pos1 = this.bg01?.position;
    const pos2 = this.bg02?.position;

    this.bg01?.setPosition(pos1.x, pos1.y - this.speed * deltaTime, pos1.z);
    this.bg02?.setPosition(pos2.x, pos2.y - this.speed * deltaTime, pos2.z);

    const pos11 = this.bg01?.position;
    const pos22 = this.bg02?.position;

    if (this.bg01?.position.y < -852) {
      this.bg01?.setPosition(pos22.x, pos22.y + 852, pos22.z);
    }

    if (this.bg02?.position.y < -852) {
      this.bg02?.setPosition(pos11.x, pos11.y + 852, pos11.z);
    }
  }
}


