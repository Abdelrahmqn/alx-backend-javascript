import { signUpUser } from './4-user-promise';
import { uploadphoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadphoto(fileName)])
    .then((result) => (
      result.map((mapping) => ({
        status: mapping.status,
        value: mapping.status === 'fulfilled' ? mapping.value : String(mapping.reason),
      }))
    ));
}
