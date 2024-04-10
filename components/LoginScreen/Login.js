import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const LoginScreen = ({ navigation }) => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "663844255538-8g392dqoijri3rap2l6kuouufi6t439b.apps.googleusercontent.com",
  });
  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Standard}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          navigation.navigate("ProductList", { userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.error(error.code);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.error(error.code);
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.error(error.code);
          } else {
            console.error(error.code);
          }
        }
      }}
    />
  );
};

export default LoginScreen;
