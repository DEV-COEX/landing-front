import {v4 as uuidv4} from 'uuid';

const generateUUID = () => {
  return uuidv4();
}

const verifyUUID = (donations = [], uuid) => {
  return donations.find(donation => donation.reference === uuid);
}

export {
  generateUUID,
  verifyUUID
}
