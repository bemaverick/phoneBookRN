import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ButtonC from "../../components/ButtonC";
import Avatar from "../Avatar";
import { getUserInitials } from "../../helpers";
import TextInputC from "../TextInputC";


import styles from "./styles";


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name").min(2),
  lastName: Yup.string().required().label("Last Name").min(2),
  number: Yup.number().required().label("Phone Number")
});

export default props => (
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
              placeholder="First Name"
              value={formikProps.values.firstName}
              onChangeText={formikProps.handleChange("firstName")}
              onBlur={formikProps.handleBlur('firstName')}
              errorText={formikProps.touched.firstName && formikProps.errors.firstName}
              autoFocus
              containerStyle={styles.input}

            />
            <TextInputC
              placeholder="Last Name"
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
            placeholder="Phone Number"
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
          title={"Create"}
          isLoading={props.isLoading}
          customStyle={styles.createButton}
        />
      </React.Fragment>


    )}
  </Formik>

);
