import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export const WebViewCont = () => {

    const WEB_URI: string = 'https://www.google.com';
    const webviewRef = useRef<WebView | null>(null);

    return(
        <View style={styles.container}>
            <WebView
                style={styles.webview}
                source={{ uri: WEB_URI }}
                ref={webviewRef}
                pullToRefreshEnabled={true}
                startInLoadingState={true}
                allowsBackForwardNavigationGestures={false}
                sharedCookiesEnabled={true}
                originWhitelist={['https://*', 'http://*']}
                overScrollMode={'never'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
});
