import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Student } from '../types/Student';

interface StudentCardProps {
  student: Student;
  onPress: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onPress }) => {
  const dobDate = new Date(student.dob.date);
  const formattedDate = `${dobDate.getDate()}/${dobDate.getMonth() + 1}/${dobDate.getFullYear()}`;

  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{ uri: student.picture.large }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          {student.name.title} {student.name.first} {student.name.last}
        </Text>
        <View style={styles.genderDateContainer}>
          <Text style={styles.infoText}>{student.gender}</Text>
          <Text style={styles.infoText}>{formattedDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 5,
  },
  genderDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default StudentCard;
