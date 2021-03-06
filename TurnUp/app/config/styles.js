/**
 * Created by dat on 22/09/2016.
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    // Boilerplate

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontFamily: 'Roboto'
    },
    separator: {
        flex: 1,
        height: 0.1,
        backgroundColor: '#8E8E8E',
    },

    // Actual designs


    // Generic stuff
    fullscreenContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white'
    },

    header: {
        flex: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF9800'
    },

    footer: {
        flex: -1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF9800'
    },

    tabsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white'
    },

    tabsBar: {
        flex: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FF9800'
    },

    // Login

    loginScreen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F9BA32',
    },

    loginTurnupIcon: {
        width: 150,
        height: 150,
        marginTop: 30,
        marginBottom:-15
    },

    loginBox:{
        width: 280,
        height: 130,
        backgroundColor: '#F9BA32',
        alignItems: 'center',
        justifyContent:'space-around',
        marginBottom:10
    },
    loginBoxDivider:{
        width:180,
        height:1,
        backgroundColor: '#F8F1E5',
        marginTop:-20
    },

    loginCredentials: {
        width: 280,
        height: 80,
        backgroundColor: '#F8F1E5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },

    loginCredentialsDivider: {
        width:280,
        height:1,
        backgroundColor: '#F9BA32'
    },

    loginWithOthers: {
        width:280,
        height: 100,
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:-20,
        marginBottom:20

    },

    loginWithFacebook:{
        flexDirection:'row',
        width:280,
        height:40,
        backgroundColor: '#3b5998',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 4,
        elevation: 2
    },

    loginWithFacebookText:{
        flex: 0,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: 'white',
        textAlign: 'center',

    },

    loginWithFacebookPhoto:{
        width:15,
        height:15,
        marginRight:5
    },

    loginWithGoogle:{
        flexDirection:'row',
        width:280,
        height:40,
        backgroundColor: '#eeeeee',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 4,
        elevation: 2

    },

    loginWithGoogleText:{
        flex: 0,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: '#6d6d6d',
        textAlign: 'center',
        marginRight: 18
    },

    loginWithGooglePhoto:{
        width: 15,
        height: 15,
        marginRight: 5
    },


    loginCredentialLine: {
        flex: 1,
        flexDirection: 'row'
    },

    loginCredentialLeftPortion: {
        flex: -1,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginCredentialPhoto1: {
        width: 15,
        height: 10
    },

    loginCredentialPhoto2:  {
        width: 15,
        height: 15
    },

    loginSignInButton: {
        width: 280,
        height: 40,
        elevation: 2,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        borderRadius: 4
    },

    loginSignInButtonText: {
        flex: 0,
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: 'white',
        textAlign: 'center'
    },

    loginSignUpButton: {
        width: 112,
        height: 36  ,
        elevation: 2,
        backgroundColor: '#F45942',
        justifyContent: 'center'
    },

    loginSignUpButtonText: {
        flex: 0,
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'center'
    },

    LoginMiscellaneous:  {
        flexDirection:'row',
        width: 280,
        height: 20,
        backgroundColor: '#F9BA32',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop:-50,
        marginBottom:20

    },
    SignUpText: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: 'white',
        textAlign: 'center'

    },

    SignUpTextItalics: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline'

    },

// SignUp Screen

    SignUpScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F28500',
    },

    SignUpCredentialsDivider: {
        width:280,
        height:1,
        backgroundColor: '#F28500'
    },
    SignUpTurnup: {
        width: 170,
        height: 170
    },

    SignUpCredentials: {
        width: 280,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.63)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 30,
        marginBottom: 20
    },

    SignUpCredentialLine: {
        flex: 1,
        flexDirection: 'row'
    },

    SignUpCredentialLeftPortion: {
        flex: -1,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    SignUpCredentialPhoto1: {
        width: 15,
        height: 10
    },

    SignUpCredentialPhoto2:  {
        width: 15,
        height: 15
    },

    SignUpButton: {
        width: 280,
        height: 40,
        elevation: 2,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        borderRadius: 4
    },

    SignUpButtonText: {
        flex: 0,
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: 'white',
        textAlign: 'center'
    },

    /*SignUpButton: {
        width: 112,
        height: 36,
        elevation: 2,
        backgroundColor: '#F45942',
        justifyContent: 'center'
    },

    SignUpButtonText: {
        flex: 0,
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'center'
    },
    */


    // Information enrichment screen

    topContainer: {
        flex: -1,
        alignItems: 'stretch',
        backgroundColor: "black"
        //#F28500
    },

    topTabButtonsContainer: {
        height: 50,
        flexDirection: 'row'
    },

    tabBarButton: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    selectedTabBarButton: {
        flex: 1,
        backgroundColor: '#F28500',
        alignItems: 'center',
        justifyContent: 'center'
    },

    dateTimeScroller: {
        height: 60
    },

    enrichmentNavigationButton: {
        flex: 0,
        flexDirection: 'row',
        height: 44,
        width: 152,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9800',
        borderRadius: 8,
    },

    enrichmentButtonText: {
        flex: 0,
        fontSize: 18,
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    enrichmentButtonImage: {
        flex: 0,
        width: 29,
        height: 29,
    },

    // CreateEvent

    eventTypeSelector: {
        flex: 0,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    eventCells: {
       height: 180
    },



    // ContactList

   ContactListTopContainer: {
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    MessageIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent: 'center'

    },

    TickBox:{
        width: 30,
        height: 30,
        backgroundColor: 'transparent'
    },

    ContactlistSeparator: {
        height: 1,
        backgroundColor: '#8E8E8E',
    },

    MessageContainer:{
        width: 280,
        height: 120,
        justifyContent: 'space-around',
        alignItems:'stretch',
        backgroundColor: 'rgb(242,242,242)',
        flexDirection: 'column',
        borderRadius: 10
    },


    ContactListBottomContainer:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },

    MessageMultiline: {
        flex: 1,
        fontSize: 13,
        height: 80,
        padding: 4,
        marginHorizontal:5,
        marginVertical:5,
        backgroundColor:'white'
    },

    UneditableText:{
        fontSize: 12,
        textAlign: 'left',
        marginLeft: 8
    },

    ContactListViewContainer: {
        flex:1,
        marginTop: 20
    },

    ContactListViewRowContainer:{
        flex:1,
        padding:20,
        flexDirection:'row',
        alignItems: 'center'
    },

    ContactListViewText:{
        marginLeft:12,
        fontSize: 16
    },

    //Map Page

    MapSearchBarContainer:{
        backgroundColor:'rgb(237,237,237)',
        height:50,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },

    MapPinLogoContainer: {
        backgroundColor:'transparent',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        height:40
    },

    MapSearchButton: {
        backgroundColor:'transparent',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        height:50
    },

    MapPageTopContainer: {
        flex: 0.17,
        backgroundColor: 'white',
        flexDirection: 'column',
    },

    SearchTextContainer: {
        flex: 2.7,
        backgroundColor: 'white',
        height:32,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
        marginTop:5,
        fontSize:11
    },

    MapPageMiddleContainer: {
        flex:0.85,
        alignItems:'center',
        backgroundColor:'red',
        justifyContent:'center'
    },

    // Contact list

    contactListViewContainer: {
        backgroundColor: 'rgb(242,242,242)',
        flexDirection: 'row',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactListViewName: {
        backgroundColor:'transparent',
        flex:3,
    },
    contactListViewNameText: {
        marginLeft:20,
        flex: 0,
        fontSize: 15,
        fontFamily: "SourceSansPro-Regular",
        color: 'black',
    },
    contactListViewCheckbox: {
        backgroundColor:'transparent',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    contactListSectionHeader: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    contactListSectionHeaderText: {
        marginLeft:20,
        flex:0,
        fontSize: 18,
        fontFamily: "SourceSansPro-Regular",
        color: 'white',
    },
});