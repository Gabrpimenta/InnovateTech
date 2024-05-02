import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setStudents } from '../store/studentsSlice';
import { getStudents } from '../services/Api';
import storage from '../utils/mmkv';
import { Student } from '../types/Student';

const INITIAL_STUDENTS_PER_PAGE = 20;

const useStudentsData = () => {
  const dispatch = useDispatch();
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const cachedStudents = storage.getString('students');
        const parsedStudents: Student[] = cachedStudents
          ? JSON.parse(cachedStudents)
          : await getStudents(1);
        dispatch(setStudents(parsedStudents));
        setAllStudents(parsedStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Error fetching students. Please try again.');
      } finally {
        setIsLoadingMore(false);
      }
    };

    fetchStudents();
  }, [dispatch]);

  const loadMoreStudents = useCallback(async () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      try {
        const fetchedStudents = await getStudents(currentPage);
        const updatedStudents = [...allStudents, ...fetchedStudents.results];
        const limitedStudents = updatedStudents.slice(
          0,
          INITIAL_STUDENTS_PER_PAGE * currentPage,
        );

        storage.set('students', JSON.stringify(limitedStudents));
        dispatch(setStudents(limitedStudents));
        setAllStudents(limitedStudents);
        setCurrentPage(currentPage + 1);
      } catch (error) {
        console.error('Error fetching more students:', error);
        setError('Error fetching more students. Please try again.');
      } finally {
        setIsLoadingMore(false);
      }
    }
  }, [allStudents, currentPage, isLoadingMore, dispatch]);

  const openModal = (student: Student) => {
    setSelectedStudent(student);
    setIsModalVisible(true);
  };

  return {
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
  };
};

export default useStudentsData;
