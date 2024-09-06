import React, { useState } from 'react';
import { Button, Modal, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';

function ModalComponent() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 60,
      }}
    >
      <Button
        title='Open'
        color='midnightblue'
        onPress={() => {
          setIsModalVisible(true);
        }}
      />
    
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        presentationStyle='pageSheet'
      >
        <View style={{ backgroundColor: 'lightblue', padding: 60, flex: 1 }}>
          <Text style={{ padding: 60 }}>Modal Content</Text>
          <Button
            title='Close'
            color='midnightblue'
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal>
      
    </SafeAreaView>
  );
}

export default ModalComponent;
