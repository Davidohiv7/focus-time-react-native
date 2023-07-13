import { View, StyleSheet, Text, FlatList } from 'react-native';
import { FC } from 'react';
import COLORS from 'utils/colors';
import { FONT_SIZES, SPACING } from 'utils/size';
import { SubjectHistory } from 'utils/types';

type Props = {
  subjectHistory: SubjectHistory[];
};

const Item: FC<{ data: SubjectHistory }> = ({ data }) => (
  <View style={styles.item} key={data.id}>
    <Text style={styles.text}>- {data.title}</Text>
  </View>
);

const FocusHistory: FC<Props> = ({ subjectHistory }) => {
  if (!subjectHistory?.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task list: </Text>
      <FlatList
        data={subjectHistory}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
  title: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  item: {
    marginLeft: SPACING.md,
    marginBottom: SPACING.sm,
  },
  text: {
    color: COLORS.white,
    fontSize: FONT_SIZES.lg,
  },
});

export default FocusHistory;
