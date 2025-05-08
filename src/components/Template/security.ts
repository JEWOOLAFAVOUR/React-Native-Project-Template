import {sendToast} from './utilis';

type ValidationType = 'login' | 'phone' | 'register' | 'password' | 'email';

type DataMap = {
  login: {email?: string; password?: string};
  phone: {phone?: string};
  register: {email?: string; firstName?: string; lastName?: string};
  password: {password?: string; confirmPassword?: string};
  email: {email?: string};
};

export const makeSecurity = <T extends ValidationType>(
  type: T,
  data: DataMap[T],
): string[] => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  const phonePattern = /^0\d{10}$/;

  const errors: string[] = [];

  switch (type) {
    case 'login': {
      const {email, password} = data as DataMap['login'];
      if (!email || email.trim() === '') {
        errors.push('Enter a Valid Email Address');
      } else if (!emailPattern.test(email)) {
        errors.push('Enter a Valid Email Address');
      }

      if (!password || password.trim() === '') {
        errors.push('Enter a Valid Password');
      }
      break;
    }

    case 'phone': {
      const {phone} = data as DataMap['phone'];
      if (!phone || phone.trim() === '') {
        errors.push('Enter a Valid Phone Number');
      } else if (!phonePattern.test(phone)) {
        errors.push('Invalid Phone Number Format');
      }
      break;
    }

    case 'register': {
      const {email, firstName, lastName} = data as DataMap['register'];
      if (!firstName || firstName.trim() === '') {
        errors.push('Enter a Valid FirstName');
      }

      if (!lastName || lastName.trim() === '') {
        errors.push('Enter a Valid LastName');
      }

      if (!email || email.trim() === '') {
        errors.push('Enter a Valid Email Address');
      } else if (!emailPattern.test(email)) {
        errors.push('Enter a Valid Email Address');
      }
      break;
    }

    case 'password': {
      const {password, confirmPassword} = data as DataMap['password'];
      if (!password || password.trim() === '') {
        errors.push('Enter a Valid Password');
      }

      if (!confirmPassword || confirmPassword.trim() === '') {
        errors.push('Enter a Valid Confirm Password');
      } else if (confirmPassword !== password) {
        errors.push('Password must be same');
      }
      break;
    }

    case 'email': {
      const {email} = data as DataMap['email'];
      if (!email || email.trim() === '') {
        errors.push('Enter a Valid Email Address');
      } else if (!emailPattern.test(email)) {
        errors.push('Enter a Valid Email Address');
      }
      break;
    }
  }

  return errors;
};
