import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FilterButtonGroupProps {
  selectedGender: string | null;
  onSelectGender: (gender: string | null) => void;
}

const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
  selectedGender,
  onSelectGender,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedGender === 'male' && styles.selectedFilterButton,
        ]}
        onPress={() => onSelectGender('male')}
      >
        <Text style={styles.filterButtonText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedGender === 'female' && styles.selectedFilterButton,
        ]}
        onPress={() => onSelectGender('female')}
      >
        <Text style={styles.filterButtonText}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedGender === null && styles.selectedFilterButton,
        ]}
        onPress={() => onSelectGender(null)}
      >
        <Text style={styles.filterButtonText}>All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedFilterButton: {
    backgroundColor: 'pink',
  },
  filterButtonText: {
    color: 'black',
  },
});

export default FilterButtonGroup;
