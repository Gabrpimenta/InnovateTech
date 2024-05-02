import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FilterButtonGroup from '../components/FilterButtonGroup';
import StudentCard from '../components/StudentCard';
import StudentDetailsModal from '../components/StudentDetailsModal';
import { Student } from 'src/types/Student';
import useStudentsData from 'src/hooks/useStudentsData';

const StudentsScreen: React.FC = () => {
  const {
    allStudents,
    isLoadingMore,
    selectedGender,
    setSelectedGender,
    loadMoreStudents,
    isModalVisible,
    openModal,
    selectedStudent,
    setIsModalVisible,
    error,
  } = useStudentsData();

  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: Student }) => (
    <StudentCard student={item} onPress={() => openModal(item)} />
  );

  const handleGenderFilter = (gender: string | null) => {
    setSelectedGender(gender);
  };

  const filteredStudents = selectedGender
    ? allStudents.filter(student => student.gender === selectedGender)
    : allStudents;

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.title}>InnovateTech</Text>
      <FilterButtonGroup
        selectedGender={selectedGender}
        onSelectGender={handleGenderFilter}
      />
      <FlatList
        ref={flatListRef}
        data={filteredStudents}
        renderItem={renderItem}
        keyExtractor={item => item.login.uuid}
        ListFooterComponent={
          isLoadingMore ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text style={styles.loadingMoreText}>CARREGANDO MAIS...</Text>
          )
        }
        onEndReached={loadMoreStudents}
      />
      <StudentDetailsModal
        isVisible={isModalVisible}
        student={selectedStudent}
        onClose={() => setIsModalVisible(false)}
      />
      <TouchableOpacity style={styles.scrollToTopButton} onPress={scrollToTop}>
        <Text style={styles.scrollToTopText}>Scroll to Top</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingMoreText: {
    textAlign: 'center',
  },
  scrollToTopButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  scrollToTopText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StudentsScreen;
