import Modal from './Modal';
import alert from './alert';
import prompt from './prompt';
import './style/index.web';

(Modal as any).alert = alert;
(Modal as any).prompt = prompt;

export default Modal;
