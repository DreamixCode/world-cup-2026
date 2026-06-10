import ContentContainer from "../ContentContainer";
import Spinner from "../Spinner";
import Button from "../Button";
import { useChampions, useSelectChampion } from "../../api/queryHooks";
import { getFlag } from "@/utils.jsx";

export default function ChampionView() {
  const { champions, isLoading, isFetching } = useChampions();
  const { selectChampion, isLoadingSelect } = useSelectChampion();

  const rows = Array.isArray(champions)
    ? champions
    : champions?.items || champions?.data || [];

  return (
    <div
      className="bg-black grow uppercase sm:text-dec-base text-dec-2xs"
      style={{
        backgroundImage: "url(/colors-top.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <ContentContainer
        className="py-4 grow justify-center select-none h-full"
        maxWidthClassName="max-w-4xl px-4"
      >
        <div className="sm:mt-24">
          <div className="text-center font-extrabold bg-transparent text-white text-dec-h3 pb-4 md:text-dec-t2 tracking-widest">
            <h1>Champion</h1>
          </div>

          {(isLoading || isFetching) && (
            <div className="flex justify-center pt-10 items-center">
              <Spinner className="h-16 w-16" />
            </div>
          )}

          {!isLoading && (
            <table className="bg-dec-primary w-full text-dec-background font-extrabold">
              <thead>
                <tr className="border-b-4 border-dec-primary-light h-8">
                  <th className="text-left font-extrabold pl-2">Team</th>
                  <th className="text-right font-extrabold pr-2">
                    Coefficient
                  </th>
                  <th className="text-right font-extrabold pr-2">Action</th>
                </tr>
              </thead>
              <tbody className="sm:text-dec-base text-dec-2xs">
                {rows?.map((item) => {
                  const isSelected = item?.selected === true;
                  return (
                    <tr
                      className={`border-b-4 border-dec-primary-light ${isSelected ? "bg-dec-primary-middleBlue text-white" : ""}`}
                      key={item?.id}
                    >
                      <td className="py-2 pl-2">
                        <div className="flex items-center gap-2">
                          <span>{getFlag(item?.name)}</span>
                          <span>{item?.name}</span>
                        </div>
                      </td>
                      <td className="py-2 pr-2 text-right">
                        {item?.coefficient ?? ""}
                      </td>
                      <td className="py-2 pr-2 text-right">
                        <Button
                          className="px-3 py-1 rounded-tr-[10px] rounded-bl-[10px]"
                          loading={isLoadingSelect}
                          disabled={isSelected}
                          onClick={() =>
                            selectChampion({
                              id: item?.id,
                              name: item?.name,
                            })
                          }
                        >
                          {isSelected ? "Selected" : "Select"}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </ContentContainer>
    </div>
  );
}
