import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

const Select = ({callback,styles,items,placeholder,name})=>{
    return (
        <RNPickerSelect
            onValueChange={value=>callback(value,name)}
            style={styles}
            useNativeAndroidPickerStyle={false}
            items={items}
            placeholder={placeholder}
        />
    )
}

export default Select