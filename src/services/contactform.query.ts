import { gql } from "@apollo/client";

export const ContactMutation = gql`
  mutation(
    $name: String
    $phoneNumber: String
    $email: String
    $address: String
    $content: String
  ) {
    createUserContact(
      data: {
        name: $name
        phoneNumber: $phoneNumber
        email: $email
        address: $address
        content: $content
      }
    ) {
      name
    }
  }
`;
