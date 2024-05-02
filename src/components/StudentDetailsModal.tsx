import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Student } from '../types/Student';

interface StudentDetailsModalProps {
  isVisible: boolean;
  student: Student | null;
  onClose: () => void;
}

const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({
  isVisible,
  student,
  onClose,
}) => {
  if (!student) return null;

  const dobDate = new Date(student.dob.date);
  const formattedDate = dobDate.toLocaleDateString('en-US');

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Image
          source={{ uri: student.picture.large }}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>
          Name: {student.name.title} {student.name.first} {student.name.last}
        </Text>
        <Text style={styles.modalText}>Email: {student.email}</Text>
        <Text style={styles.modalText}>Gender: {student.gender}</Text>
        <Text style={styles.modalText}>Date of Birth: {formattedDate}</Text>
        <Text style={styles.modalText}>Phone: {student.phone}</Text>
        <Text style={styles.modalText}>Cell: {student.cell}</Text>
        <Text style={styles.modalText}>Nationality: {student.nat}</Text>
        <Text style={styles.modalText}>
          Address: {student.location.street.number}{' '}
          {student.location.street.name}, {student.location.city},{' '}
          {student.location.state}, {student.location.country},{' '}
          {student.location.postcode}
        </Text>
        <Text style={styles.modalText}>ID: {student.id.value}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StudentDetailsModal;
