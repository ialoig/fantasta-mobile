
import AsyncStorage from '@react-native-async-storage/async-storage'

const Set = async ( key, value) =>
{
    try
    {
        await AsyncStorage.setItem( key, value )
        
        return Promise.resolve()
    }
    catch (e)
    {
        console.log(e)
    }
    
    return Promise.reject()
}

const Get = async ( key ) =>
{
    let value = ''

    try
    {
        value = await AsyncStorage.getItem( key )
    }
    catch (e)
    {
        console.log(e)

        value = null
    }
    
    return Promise.resolve(value)
}

const MultiSet = async ( pairs ) =>
{
    try
    {
        await AsyncStorage.multiSet(pairs)

        return Promise.resolve()
    }
    catch (e)
    {
        console.log(e)
    }
  
    return Promise.reject()
}

const MultiGet = async ( keys ) =>
{
    let values = []
    try
    {
        values = await AsyncStorage.multiGet(keys)
    }
    catch (e)
    {
        console.log(e)
    }

    return Promise.resolve(values)
}

const Merge = async ( key, value ) =>
{
    try
    {
        await AsyncStorage.mergeItem( key, value )
        
        return Promise.resolve()
    }
    catch (e)
    {
        console.log(e)
    }
    return Promise.reject()
}

const Remove = async ( key ) =>
{
    try
    {
        await AsyncStorage.removeItem( key )

        return Promise.resolve()
    }
    catch (e)
    {
        console.log(e)
    }
    return Promise.reject()
}

const MultiRemove = async ( keys ) =>
{
    try
    {
        await AsyncStorage.multiRemove( keys )

        return Promise.resolve()
    }
    catch (e)
    {
        console.log(e)
    }
    return Promise.reject()
}

const All = async () =>
{
    let keys = []
    try
    {
        keys = await AsyncStorage.getAllKeys()
    }
    catch (e)
    {
        console.log(e)
    }

    return Promise.resolve(keys)
}

const Clear = async () =>
{
    try
    {
        await AsyncStorage.clear()
    }
    catch (e)
    {
        console.log(e)
    }
  
    return Promise.resolve()
}

export const Storage = {
    Set,
    Get,
    Merge,
    Remove,
    MultiSet,
    MultiGet,
    MultiRemove,
    All,
    Clear
}