import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ButtonC from "../../components/ButtonC";
import Avatar from "../Avatar";
import { getUserInitials } from "../../helpers";
import TextInputC from "../TextInputC";

import { TEXT_INPUT } from "../../constants/dictionary";
import styles from "./styles";


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label(TEXT_INPUT.FIRST_NAME).min(2),
  lastName: Yup.string().required().label(TEXT_INPUT.LAST_NAME).min(2),
  number: Yup.number().required().label(TEXT_INPUT.PHONE)
});

type _t_props = {
  initialValues: {
    firstName: string,
    lastName: string,
    number: string
  },
  onSubmit: () => void, //TODO flow
  isLoading: boolean,
  submitText: string
}

export default (props: _t_props) => (
  <Formik
    initialValues={props.initialValues}
    onSubmit={(values, actions) => {
      props.onSubmit(values, actions);
      console.log(actions)
    }}
    validationSchema={validationSchema}
  >
    {formikProps => (
      <React.Fragment>
        <View style={styles.row}>
          <Avatar text={getUserInitials(`${formikProps.values.firstName} ${formikProps.values.lastName}`)} />
          <View style={styles.fioBlock}>
            <TextInputC
              placeholder={TEXT_INPUT.FIRST_NAME}
              value={formikProps.values.firstName}
              onChangeText={formikProps.handleChange("firstName")}
              onBlur={formikProps.handleBlur('firstName')}
              errorText={formikProps.touched.firstName && formikProps.errors.firstName}
              autoFocus
              containerStyle={styles.input}

            />
            <TextInputC
              placeholder={TEXT_INPUT.LAST_NAME}
              value={formikProps.values.lastName}
              onChangeText={formikProps.handleChange("lastName")}
              onBlur={formikProps.handleBlur('lastName')}
              errorText={formikProps.touched.lastName && formikProps.errors.lastName}
              containerStyle={styles.input}

            />
          </View>
        </View>
        <View style={styles.phoneBlock}>
          <TextInputC
            placeholder={TEXT_INPUT.PHONE}
            value={formikProps.values.number}
            onChangeText={formikProps.handleChange("number")}
            onBlur={formikProps.handleBlur('number')}
            errorText={formikProps.touched.number && formikProps.errors.number}
            keyboardType="phone-pad"
            iconName="phone"
            maxLength={16}
          />
        </View>
        <ButtonC
          onPress={() => formikProps.handleSubmit()}
          title={props.submitText}
          isLoading={props.isLoading}
          customStyle={styles.createButton}
        />
      </React.Fragment>


    )}
  </Formik>

);
